import express from "express";
import MissionCotroller from "../controllers/MissionController.js";

const routes = express.Router();

routes
    .get("/missions", MissionCotroller.listMissions)
    .post("/missions", MissionCotroller.registerMission);

export default routes;