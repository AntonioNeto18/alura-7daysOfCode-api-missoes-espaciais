import express from "express";
import MissionCotroller from "../controllers/MissionController.js";

const routes = express.Router();

routes
    .get("/missions/search", MissionCotroller.getMissionByFilter) // Buscar por categoria
    .get("/missions", MissionCotroller.listMissions) // Buscar todas as missões
    .get("/missions/:id", MissionCotroller.getMissionById) // Buscar por id
    .put("/missions/:id", MissionCotroller.updateMission) // Atualizar missão por id
    .delete("/missions/:id", MissionCotroller.deleteMission) // Deletar missão por id
    .post("/missions", MissionCotroller.registerMission); // Registrar nova missão

export default routes;