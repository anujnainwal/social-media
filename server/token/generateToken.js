import jwt from "jsonwebtoken";

const generate_Access_Token = async (data) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
  });
  return token;
};

const generate_Refresh_Token = () => {
  const token = jwt.sign(
    {
      iss: process.env.ISSUER_NAME,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
    }
  );
  return token;
};

export { generate_Access_Token, generate_Refresh_Token };
