import connectDB from "../../../components/utility-components/connectDB";
import Users from "../../../models/user";
import { generateJWT } from "../../../utility-functions/generateJWT";

export default async function LoginHandler(req, res) {
  await connectDB();
  const { name, email, password } = req.body;
  const findRegisteredUser = await Users.find({ email, password });
  if (findRegisteredUser.length > 0) {
    res.status(200).json({
      message: "logged in",
      email,
      token: await generateJWT(email),
    });
  } else {
    res.json({ message: "please signup" });
  }
}
