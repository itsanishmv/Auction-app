// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../../components/utility-components/connectDB";
import Users from "../../../models/user";

export default async function signupHandler(req, res) {
  await connectDB();
  const { name, email, password } = req.body;
  try {
    const userExists = await Users.findOne({ email });
    if (!userExists) {
      const users = await Users.create({ name, email, password });
      res.status(201).json({ users });
    } else {
      res.status(404).json({ message: "user already exists" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
