import findMissions from "../services/findMissions.js";
import addMission from "../services/addMission.js";
import findAndUpdateMission from "../services/findAndUpdateMission.js";
import deleteMissionById from "../services/deleteMissionById.js";
import findMissionsById from "../services/findMissionsById.js";

class MissionCotroller {
    static async listMissions(req, res, next) {
        try {
            const { page = 1, limit = 5, sort } = req.query;
            const missions = await findMissions(page, limit, sort);
            res.status(200).json({ page: page, limit: limit, missions: missions });
        } catch (error) {
            next(error);
        };
    };

    static async getMissionById(req, res, next) {
        try {
            const id = req.params.id;
            const mission = await findMissionsById(id);
            if (!mission) next(404);
            else res.status(200).json(mission);
        } catch (error) {
            next(error);
        };
    };

    static async getMissionByFilter(req, res, next) {
        try {
            let filter = {};
            const { name, crew, spacecraft, destination, status, duration, page = 1, limit = 5, sort } = req.query;
            if (name) filter.name = { $regex: name, $options: "i" };
            if (crew) filter.crew =  crew;
            if (spacecraft) filter.spacecraft =  { $regex: spacecraft, $options: "i" };
            if (destination) filter.destination =  { $regex: destination, $options: "i" };;
            if (status) filter.status =  { $regex: status, $options: "i" };;
            if (duration) filter.duration   = { $regex: duration, $options: "i" };

            const missions = await findMissions(page, limit, sort, filter);
            res.status(200).json({ page: page, limit: limit, missions: missions });
        } catch (error) {
            next(error);
        };
    };

    static async registerMission(req, res, next) {
        try {
            const mission = await addMission(req.body);
            res.status(200).json({ mission }); 
        } catch (error) {
            next(error);
        };
    };

    static async updateMission (req, res, next) {
        try {
            const id = req.params.id;
            const mission = await findMissionsById(id);
            if (!mission) next(404);
            await findAndUpdateMission(id, req.body);
            res.status(200).json(await findMissionsById(id));
        } catch (error) {
            next(error);
        };
    };

    static async deleteMission (req, res, next) {
        try {
            const id = req.params.id;
            const mission = await findMissionsById(id);
            if (!mission) next(404);
            await deleteMissionById(id);
            res.status(200).json({ message: "Mission deleted sucessfully" });
        } catch (error) {
            next(error);
        };
    };
};

export default MissionCotroller;