import mongoose, { model, models, Schema } from "mongoose";

const usersSchema = new Schema({
  name: String,
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

const Users = models.Users || model("Users", usersSchema);

export default Users;
