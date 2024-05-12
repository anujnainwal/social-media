import express from "express";
import { sendSuccessResponse } from "./utils/utility.helper.js";
import connectDB from "./config/database.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import cors from "cors";
const app = express();

connectDB();

app.use(cors({ origin: "*" }));

app.use(
  express.json({
    limit: "50mb",
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//settings up response headers
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By", false);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile);
    }
  )
);

app.use(
  session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    cookie: { maxAge: 60000 },
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.get("/", (req, res) => {
  return sendSuccessResponse(res, true, "The server is now online.");
});

export default app;
