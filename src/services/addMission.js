import missions from "../models/missionModel.js";

async function addMission (dados) {
    return await missions.create(dados);
};

export default addMission;