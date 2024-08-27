// pages/api/purchases/[id].js
import connectMongoDB from "../../../../../libs/mongodb";
import Purchase from "../../../../../models/purchaseSchema";
import Party from "../../../../../models/partySchema";
import Item from "../../../../../models/itemSchema";
export async function GET(req, { params }) {
  await connectMongoDB();

  try {
    const { id } = params;
    const purchase = await Purchase.findById(id)
      .populate({ path: "party", select: "name" })
      .populate({ path: "items.item", select: "name" })
      .exec();

    if (!purchase) {
      return new Response(JSON.stringify({ error: "Purchase not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(purchase), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching purchase:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch purchase" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req, { params }) {
  await connectMongoDB();

  try {
    const { id } = params;
    const body = await req.json(); // Parse JSON body

    const updatedPurchase = await Purchase.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })
      .populate({ path: "party", select: "name" })
      .populate({ path: "items.item", select: "name" })
      .exec();

    if (!updatedPurchase) {
      return new Response(JSON.stringify({ error: "Purchase not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(updatedPurchase), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating purchase:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update purchase" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(req, { params }) {
  await connectMongoDB();

  try {
    const { id } = params;
    const deletedPurchase = await Purchase.findByIdAndDelete(id);

    if (!deletedPurchase) {
      return new Response(JSON.stringify({ error: "Purchase not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Purchase deleted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting purchase:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete purchase" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
