import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { apiGames, apiGame } from "./api/api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const query = req.query;

  const { data } = await apiGames.get(
    query?.category ? `/?category=${query.category}` : "/"
  );

  res.status(200).render("home", { data });
});

app.get("/games/:id", async (req, res) => {
  const { id } = req.params;

  const { data } = await apiGame.get(`/?id=${id}`);

  console.log(data);

  res.status(200).render("game", { game: data });
});

app.listen(3000, () => {
  console.log("Server listening");
});
