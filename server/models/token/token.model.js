import mongoose from "monggose";

const tokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TokenModel = new mongoose.model("tokens", tokenSchema);

export default TokenModel;
