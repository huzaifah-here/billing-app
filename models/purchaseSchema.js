import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
    required: true,
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item", // Reference to the Item model
        required: true,
      },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      unit: { type: String, required: true },
    },
  ],
  date: { type: Date, required: true }, // Ensure this field is required if necessary
  type: {
    type: String,
    enum: ["sale", "purchase"], // Define allowed values for the type field
    required: true,
  },
  //   cashType: {
  //     type: String,
  //     enum: ["cash", "credit"], // Define allowed values for the type field
  //     required: true,
  //   },
});
const Purchase =
  mongoose.models.Purchase || mongoose.model("Purchase", purchaseSchema);

export default Purchase;
