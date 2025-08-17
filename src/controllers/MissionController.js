import mission from "../models/missionModel.js"

class MissionCotroller {
    static async listMissions(req, res) {
        try {
            const allMissions = await mission.find({});
            res.status(200).json(allMissions);
        } catch (error) {
            res.status(500).json({ message: "Internal Error", error: error, status: 500 });
        };
    };

    static async registerMission(req, res) {
        try {
            const newMission = new mission(req.body);
            await newMission.save();
            res.status(200).json({ newMission }); 
        } catch (error) {
            res.status(500).json({ message: "Internal Error", error: error, status: 500 });
        };
    };
}

export default MissionCotroller;