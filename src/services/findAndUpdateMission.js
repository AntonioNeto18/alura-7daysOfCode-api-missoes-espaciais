import missions from "../models/missionModel.js";

async function findAndUpdateMission (id, dados) {
    return await missions.findByIdAndUpdate(id, dados);
};

export default findAndUpdateMission;