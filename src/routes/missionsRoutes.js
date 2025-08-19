import express from "express";
import MissionCotroller from "../controllers/MissionController.js";

const routes = express.Router();

routes
    .get("/missions", MissionCotroller.listMissions)
    .get("/missions/:id", MissionCotroller.getMissionById)
    .post("/missions", MissionCotroller.registerMission);

export default routes;