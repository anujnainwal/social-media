import mongoose from "mongoose";
import Bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

//auto hashing password
userSchema.pre("save", async function (next) {
  let users = this;
  if (!users.isModified("password")) {
    next();
  }
  const salt = await Bcryptjs.genSalt(10);
  const hash = await Bcryptjs.hash(users.password, salt);
  users.password = hash;
});

//compare password
userSchema.methods.comparePassword = async function (password) {
  let users = this;
  const isMatch = await Bcryptjs.compare(password, users.password);
  return isMatch;
};

const UsersModel = new mongoose.model("users", userSchema);

export default UsersModel;
