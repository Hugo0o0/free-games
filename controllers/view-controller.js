import { apiGames, apiGame } from "../api/api.js";
import tryCatch from "../utils/try-catch.js";

export const homePage = tryCatch(async (req, res) => {
  const query = req.query;

  let reqUrl = "";

  const params = new URLSearchParams();

  if (query.category) {
    params.set("category", query.category);
  }
  if (query["sort-by"]) {
    params.set("sort-by", query["sort-by"]);
  }
  if (query.platform) {
    params.set("platform", query.platform);
  }

  const { data, request } = await apiGames.get(`/?${params.toString()}`);

  res.status(200).render("home", { data });
});

export const gamePage = tryCatch(async (req, res, next) => {
  const { id } = req.params;

  const { data } = await apiGame.get(`/?id=${id}`);

  res.status(200).render("game", { game: data });
});

export const loginPage = tryCatch((req, res, next) => {
  res.status(200).render("login");
});

export const signupPage = tryCatch((req, res, next) => {
  res.status(200).render("signup");
});
