import express from "express";
const authRoutes = express.Router();
import authController from "../../controllers/auth/index.js";
import passport from "passport";

authRoutes.post("/register", authController.userRegister);
authRoutes.post("/login", authController.userLogin);

//social login
authRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRoutes.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:3000");
  }
);

export default authRoutes;
