import express from "express";
import MissionCotroller from "../controllers/MissionController.js";

const routes = express.Router();

routes
    .get("/missions", MissionCotroller.listMissions)
    .get("/missions/:id", MissionCotroller.getMissionById)
    .put("/missions/:id", MissionCotroller.updateMission)
    .post("/missions", MissionCotroller.registerMission);

export default routes;