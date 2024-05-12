import UsersModel from "../../models/users/users.model.js";
import {
  internalErrorResponse,
  sendErrorResponse,
  sendSuccessResponseWithData,
} from "../../utils/utility.helper.js";
import { registerSchema } from "../../utils/validation.helper.js";

const userRegister = async (req, res) => {
  let { error, value } = registerSchema.validate(req.body);
  if (error) {
    return internalErrorResponse(res, false, null, error.details[0].message);
  }
  const { fullname, email, password } = value;
  try {
    const user = await UsersModel.findOne({ email });

    if (user) {
      return sendErrorResponse(
        res,
        false,
        null,
        "User with this email already exists."
      );
    }
    const newUser = new UsersModel({
      fullname,
      email,
      password,
    });
    await newUser.save();
    return sendSuccessResponseWithData(
      res,
      true,
      "User registration successfully registered.",
      { userInfo: newUser }
    );
  } catch (error) {
    return internalErrorResponse(res, false, null, error.message);
  }
};

export default userRegister;
