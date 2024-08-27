// /api/purchases/index.js
import connectMongoDB from "../../../../libs/mongodb";
import Purchase from "../../../../models/purchaseSchema";
import Party from "../../../../models/partySchema";
import Item from "../../../../models/itemSchema";
export async function POST(req) {
  await connectMongoDB();

  try {
    const body = await req.json(); // Parse JSON body
    const purchase = new Purchase(body);
    const savedPurchase = await purchase.save();
    return new Response(JSON.stringify(savedPurchase), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating purchase:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create purchase" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
export async function GET() {
  await connectMongoDB();

  try {
    const purchases = await Purchase.find()
      .populate({ path: "party", select: "name" })
      .populate({ path: "items.item", select: "name" })
      .exec();
    console.log(purchases);
    return new Response(JSON.stringify(purchases), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching purchases:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch purchases" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
