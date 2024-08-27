import connectMongoDB from "../../../../../libs/mongodb";
import Sale from "../../../../../models/saleSchema";
import Party from "../../../../../models/partySchema";
import Item from "../../../../../models/itemSchema";
export async function GET(req, { params }) {
  await connectMongoDB();
  console.log("object");
  try {
    const { id } = params; // Extract ID from params if provided
    if (id) {
      const invoice = await Sale.findById(id).populate("party").exec();
      if (invoice) {
        return new Response(JSON.stringify(invoice), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        return new Response(JSON.stringify({ error: "Invoice not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
    } else {
      const invoices = await Sale.find().populate("party").exec();
      return new Response(JSON.stringify(invoices), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch invoices" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function DELETE(req, { params }) {
  await connectMongoDB();

  try {
    const { id } = params; // Extract ID from params
    if (!id) {
      return new Response(JSON.stringify({ error: "Invoice ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await Sale.findByIdAndDelete(id);
    if (result) {
      return new Response(
        JSON.stringify({ message: "Invoice deleted successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Invoice not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error deleting invoice:", error);
    return new Response(JSON.stringify({ error: "Failed to delete invoice" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
