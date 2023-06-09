import express from "express";
import {
  gamePage,
  homePage,
  loginPage,
  signupPage,
} from "../controllers/view-controller.js";

const router = express.Router();

router.get("/", homePage);
router.get("/games/:id", gamePage);
router.get("/login", loginPage);
router.get("/signup", signupPage);

export default router;
