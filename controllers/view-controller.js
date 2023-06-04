import { apiGames, apiGame } from "../api/api.js";
import tryCatch from "../utils/try-catch.js";

export const homePage = tryCatch(async (req, res) => {
  const query = req.query;

  const { data, request } = await apiGames.get(
    query?.category ? `/?category=${query.category}` : "/"
  );

  res.status(200).render("home", { data });
});

export const gamePage = tryCatch(async (req, res, next) => {
  const { id } = req.params;

  const { data } = await apiGame.get(`/?id=${id}`);

  res.status(200).render("game", { game: data });
});
