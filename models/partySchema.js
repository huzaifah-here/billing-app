import mongoose from "mongoose";

const partySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: String,
    address: String,
  },
  { timestamps: true }
);
const Party = mongoose.models.Party || mongoose.model("Party", partySchema);

export default Party;
