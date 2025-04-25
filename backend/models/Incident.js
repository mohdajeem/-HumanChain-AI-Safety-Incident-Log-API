import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, 'Title is required']
    },
    description : {
        type: String,
        required: [true, "Description is required"],
    },
    severity : {
        type : String,
        enum : ['Low', 'Medium', 'High'],
        required: [true, "Severity is Required"]
    },
    reported_at : {
        type : Date,
        default : Date.now,
    }
})

const Incident = mongoose.model('Incident', incidentSchema);

export default Incident;