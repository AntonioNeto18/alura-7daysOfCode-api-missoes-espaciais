import missions from "../models/missionModel.js";

async function findMissions(page = 1, limit = 5, sort = "_id:-1", filter = {}) {
    try {
        page = parseInt(page);
        limit = parseInt(limit);
        let [item, order] = sort.split(":");
        order = parseInt(order);
        
        return await missions.find(filter)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ [item]: order });
    } catch (error) {
        return new Error(error);
    }
};

export default findMissions;