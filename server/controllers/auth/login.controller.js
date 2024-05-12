import UsersModel from "../../models/users/users.model.js";
import {
  generate_Access_Token,
  generate_Refresh_Token,
} from "../../token/generateToken.js";
import {
  sendSuccessResponse,
  internalErrorResponse,
  sendErrorResponse,
} from "../../utils/utility.helper.js";
import { loginSchema } from "../../utils/validation.helper.js";

const userLogin = async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    return sendErrorResponse(
      res,
      false,
      "Validation Error",
      null,
      error.details[0].message
    );
  }
  let { email, password } = value;
  try {
    const userDetails = await UsersModel.findOne({ email: email });
    if (!userDetails) {
      return sendErrorResponse(
        res,
        false,
        "Not Found",
        null,
        "User not found."
      );
    }
    const isMatch = await userDetails.comparePassword(password);
    if (!isMatch) {
      return sendErrorResponse(
        res,
        false,
        "Credentials Error",
        null,
        "Invalid Credentials"
      );
    }
    userDetails.password = undefined;
    let data = {
      _id: userDetails._id,
      fullname: userDetails.fullname,
      email: userDetails.email,
    };
    let accessToken = await generate_Access_Token(data);
    let refreshToken = generate_Refresh_Token();

    return sendSuccessResponse(res, true, "Login successful", {
      accessToken,
      refreshToken,
    });
  } catch (error) {
    return internalErrorResponse(
      res,
      false,
      "Internal Server Error.",
      null,
      error.message
    );
  }
};

export default userLogin;
