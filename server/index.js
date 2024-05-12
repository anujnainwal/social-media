import app from "./app.js";
import routers from "./routes/index.js";
const port = process.env.PORT || 8080;

app.use("/api/v1", routers);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
