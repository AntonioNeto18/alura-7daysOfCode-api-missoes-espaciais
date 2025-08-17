import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    crew: {type: Number, required: true},
    spacecraft: {type: String, required: true},
    destination: {type: String, required: true},
    status: {type: String, required: true},
    duration: {type: Number, required: true}
}, {versionKey: false});

const missionModel = mongoose.model("missoes", missionSchema);

export default missionModel;