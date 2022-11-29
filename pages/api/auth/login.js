import connectDB from "../../../components/utility-components/connectDB";
import Users from "../../../models/user";
import { generateJWT } from "../../../utility-functions/generateJWT";

export default async function LoginHandler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    const { name, email, password } = req.body;
    const userDetails = await Users.findOne({ email });
    if (userDetails !== null) {
      if (userDetails.password === password) {
        let response = {
          status: "Success",
          message: `You are logged in as ${email}`,
          data: {
            message: "logged in",
            email,
            token: await generateJWT(email),
          },
        };
        res.status(200).json(response);
      } else {
        let response = {
          status: "Fail",
          message: `Wrong Password`,
          error: "You've entered wrong password",
        };
        res.status(200).json(response);
      }
    } else {
      let response = {
        status: "Fail",
        message: `${email} user not found`,
        error: "Please signup",
      };
      res.status(400).json(response);
    }
  } else {
    let response = {
      status: "Fail",
      message: "Unsupported method",
      error: `[${req.method}] is not supported on '${req.baseUrl}'`,
    };
    res.status(406).json(response);
  }
}
