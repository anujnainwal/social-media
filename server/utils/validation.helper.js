import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().required().normalize(),
  password: Joi.string().min(8).required(),
});

const registerSchema = Joi.object({
  fullname: Joi.string()
    .required()
    .regex(/^[a-zA-Z ]+$/)
    .required()
    .messages({
      "string.base": "Fullname must be a string",
      "string.empty": "Fullname is required",
      "string.pattern.base": "Fullname can only contain alphabets and spaces",
    }),
  email: Joi.string().email().required().normalize(),
  password: Joi.string().min(8).required(),
});

export { loginSchema, registerSchema };
