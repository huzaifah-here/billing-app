import connectMongoDB from "../../../libs/mongodb";
import Party from "../../../models/partySchema";

export async function GET(request) {
  await connectMongoDB();

  try {
    const parties = await Party.find({});
    return new Response(JSON.stringify(parties), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch parties" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  await connectMongoDB();

  try {
    const data = await request.json();
    const party = new Party(data);
    const savedParty = await party.save();
    return new Response(JSON.stringify(savedParty), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create party" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
