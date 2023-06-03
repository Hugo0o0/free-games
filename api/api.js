import axios from "axios";
export const apiGames = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": "api-key",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
  responseType: "json",
});

export const apiGame = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/game",
  headers: {
    "X-RapidAPI-Key": "api-key",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
  responseType: "json",
});

export default apiGames;
