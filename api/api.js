import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const apiGames = axios.create({
  baseURL: "https://www.freetogame.com/api/games",
  responseType: "json",
});

export const apiGame = axios.create({
  baseURL: "https://www.freetogame.com/api/game",
  responseType: "json",
});

export default apiGames;
