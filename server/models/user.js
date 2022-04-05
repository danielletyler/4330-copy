import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, requireed: true },
  password: { type: String, required: true },
  wishlist: {
    type: [String],
    default: [],
  },
  id: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
