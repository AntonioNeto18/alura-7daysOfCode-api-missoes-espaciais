import findAllMissions from "../services/findAllMissions.js";
import findMission from "../services/findMission.js";
import addMission from "../services/addMission.js";
import findAndUpdateMission from "../services/findAndUpdateMission.js";

class MissionCotroller {
    static async listMissions(req, res, next) {
        try {
            const allMissions = await findAllMissions();
            res.status(200).json(allMissions);
        } catch (error) {
            next(error);
        };
    };

    static async getMissionById(req, res, next) {
        try {
            const id = req.params.id;
            const mission = await findMission(id);
            if (!mission) next(404);
            else res.status(200).json(mission);
        } catch (error) {
            next(error);
        };
    };

    static async registerMission(req, res, next) {
        try {
            const newMission = await addMission(req.body);
            res.status(200).json({ newMission }); 
        } catch (error) {
            next(error);
        };
    };

    static async updateMission (req, res, next) {
        try {
            const id = req.params.id;
            const mission = await findMission(id);
            if (!mission) next(404);
            await findAndUpdateMission(id, req.body);
            res.status(200).json(await findMission(id));
        } catch (error) {
            next(error);
        };
    };
};

export default MissionCotroller;