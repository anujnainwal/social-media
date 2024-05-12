const whiteListing = [
  "http://localhost:8080",
  "http://localhost:9000",
  "http://localhost:3000",
];

export const corsOptions = {
  origin: (origin, callback) => {
    if (whiteListing.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
  exposedHeaders: "Content-Length, Content-Range, Content-Disposition",
  maxAge: 300,
};
