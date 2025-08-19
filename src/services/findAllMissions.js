import missions from "../models/missionModel.js";

async function findAllMissions () {
    return await missions.find({});
};

export default findAllMissions;