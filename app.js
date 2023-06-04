import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import viewRouter from "./routes/view-routes.js";
import { errorHandler } from "./middleware/error-handler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(viewRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server listening");
});
