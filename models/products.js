import mongoose, { model, models, Schema } from "mongoose";

const productsSchema = new Schema({
  product_name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = models.Users || model("Users", productsSchema);

export default Users;
