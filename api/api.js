import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const apiGames = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
  responseType: "json",
});

export const apiGame = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/game",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
  responseType: "json",
});

export default apiGames;
