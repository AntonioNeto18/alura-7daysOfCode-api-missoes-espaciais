import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: [true, "Name is required"]},
    crew: {type: Number, required: [true, "Crew is required"]},
    spacecraft: {type: String, required: [true, "Spacecraft is required"]},
    destination: {type: String, required: [true, "Destination is required"]},
    status: {
        type: String, 
        required: [true, "Status is required"],
        enum: {
            values: ["Planned", "In progress", "Completed", "Failed", "Aborted"],
            message: "Status options are: Planned, In progress, Completed, Failed, Aborted"
        }
    },
    duration: {type: String, required: [true, "Duration is required"]}
}, {versionKey: false});

const missionModel = mongoose.model("missoes", missionSchema);

export default missionModel;