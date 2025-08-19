import missions from "../models/missionModel.js";

async function findMission (id) {
    return await missions.findById(id);
};

export default findMission;