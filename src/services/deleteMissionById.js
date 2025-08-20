import missions from "../models/missionModel.js";

async function deleteMissionById (id) {
    return await missions.findByIdAndDelete(id);
}

export default deleteMissionById;