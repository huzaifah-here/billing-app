import connectMongoDB from "../../../../libs/mongodb";
import Sale from "../../../../models/saleSchema";

export async function POST(req) {
  await connectMongoDB();

  try {
    const body = await req.json(); // Parse JSON body
    const invoice = new Sale(body);
    const savedInvoice = await invoice.save();
    return new Response(JSON.stringify(savedInvoice), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating invoice:", error);
    return new Response(JSON.stringify({ error: "Failed to create invoice" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req, { params }) {
  await connectMongoDB();
  console.log("object");
  try {
    const invoices = await Sale.find()
      .populate({ path: "party", select: "name" })
      .populate({ path: "items.item", select: "name" })
      .exec();
    console.log(invoices);

    return new Response(JSON.stringify(invoices), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Sale invoices:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Sale invoices" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
