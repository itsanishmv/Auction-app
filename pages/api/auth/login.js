import connectDB from "../../../components/utility-components/connectDB";
import Users from "../../../models/user";
import { generateJWT } from "../../../utility-functions/generateJWT";

export default async function LoginHandler(req, res) {
  await connectDB();
  console.log("login func running");
  const { username, password } = req.body;
  const findRegisteredUser = await Users.find({ username, password });
  if (findRegisteredUser.length > 0) {
    res.status(200).json({
      message: "logged in",
      username,
      token: await generateJWT(username),
    });
  } else {
    res.json({ message: "please signup" });
  }
}
