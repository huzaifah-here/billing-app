import connectMongoDB from "../../libs/mongodb";
import Party from "../../models/partySchema";

export default async function handler(req, res) {
  await connectMongoDB(); // Ensure the connection is established

  switch (req.method) {
    case "GET":
      try {
        const parties = await Party.find({});
        res.status(200).json(parties);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch parties" });
      }
      break;

    case "POST":
      try {
        const party = new Party(req.body);
        const savedParty = await party.save();
        res.status(201).json(savedParty);
      } catch (error) {
        res.status(400).json({ error: "Failed to create party" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
