import missions from "../models/missionModel.js";


async function findMissionsById(id) {
    return await missions.findById(id);
}

export default findMissionsById;