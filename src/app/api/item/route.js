import connectMongoDB from "../../../../libs/mongodb";
import Item from "../../../../models/itemSchema";

// Create a new item
export async function POST(req) {
  await connectMongoDB();

  try {
    // Ensure the request content type is JSON
    if (req.headers.get("Content-Type") !== "application/json") {
      return new Response(
        JSON.stringify({
          error: "Invalid content type. Only JSON is accepted.",
        }),
        {
          status: 415, // Unsupported Media Type
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Parse JSON body
    const body = await req.json();

    // Create a new item
    const newItem = new Item(body);
    const savedItem = await newItem.save();

    return new Response(JSON.stringify(savedItem), {
      status: 201, // Created
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating item:", error);
    return new Response(JSON.stringify({ error: "Failed to create item" }), {
      status: 500, // Internal Server Error
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Get all items or a specific item
export async function GET(req, { params }) {
  await connectMongoDB();
  //   console.log(params);
  try {
    //     if (params) {
    //       const { id } = params; // Extract ID from params if provided
    //       // Get a specific item by ID
    //       const item = await Item.findById(id);
    //       if (item) {
    //         return new Response(JSON.stringify(item), {
    //           status: 200, // OK
    //           headers: { "Content-Type": "application/json" },
    //         });
    //       } else {
    //         return new Response(JSON.stringify({ error: "Item not found" }), {
    //           status: 404, // Not Found
    //           headers: { "Content-Type": "application/json" },
    //         });
    //       }
    //     } else {
    // Get all items
    const items = await Item.find();
    return new Response(JSON.stringify(items), {
      status: 200, // OK
      headers: { "Content-Type": "application/json" },
    });
    // }
  } catch (error) {
    console.error("Error fetching items:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch items" }), {
      status: 500, // Internal Server Error
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Update an existing item
export async function PUT(req, { params }) {
  await connectMongoDB();

  try {
    // Ensure the request content type is JSON
    if (req.headers.get("Content-Type") !== "application/json") {
      return new Response(
        JSON.stringify({
          error: "Invalid content type. Only JSON is accepted.",
        }),
        {
          status: 415, // Unsupported Media Type
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Parse JSON body
    const body = await req.json();
    const { id } = params; // Extract ID from params

    // Update item by ID
    const updatedItem = await Item.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (updatedItem) {
      return new Response(JSON.stringify(updatedItem), {
        status: 200, // OK
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404, // Not Found
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error updating item:", error);
    return new Response(JSON.stringify({ error: "Failed to update item" }), {
      status: 500, // Internal Server Error
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Delete an item
export async function DELETE(req, { params }) {
  await connectMongoDB();

  try {
    const { id } = params; // Extract ID from params

    // Delete item by ID
    const result = await Item.findByIdAndDelete(id);
    if (result) {
      return new Response(
        JSON.stringify({ message: "Item deleted successfully" }),
        {
          status: 200, // OK
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404, // Not Found
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    return new Response(JSON.stringify({ error: "Failed to delete item" }), {
      status: 500, // Internal Server Error
      headers: { "Content-Type": "application/json" },
    });
  }
}
