import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import viewRouter from "./routes/view-routes.js";
import { errorHandler } from "./middleware/error-handler.js";

const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(viewRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server listening");
});
