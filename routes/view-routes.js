import express from "express";
import { gamePage, homePage } from "../controllers/view-controller.js";

const router = express.Router();

router.get("/", homePage);
router.get("/games/:id", gamePage);

export default router;
