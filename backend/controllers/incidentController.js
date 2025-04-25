import Incident from "../models/Incident.js";

// get all incident
export const getAllIncident = async (req, res) => {
    try{
        const incidents = await Incident.find();
        res.status(200).json(incidents);
    } catch(error){
        res.status(500).json({message: 'Server Error'});
    }
};

// route for post incident

export const createIncident = async (req, res) => {
    try{
        const {title, description, severity} = req.body;

        if(!title || !description || !severity){
            return res.status(400).json({message  :'All fields are required'});
        }
        
        if(!['Low','Medium','High'].includes(severity)){
            return res.status(400).json({message : 'Invalid severity level'});
        }
        const incident = new Incident({
            title : title,
            description : description,
            severity : severity
        });
        const savedIncident = await incident.save();
        return res.status(201).json(savedIncident);
    } catch(err){
        return res.status(500).json({message: "Could not save Incident"});
    }
};

// get any incident by id

export const getIncidentById = async (req, res) => {
    try{
        const {id} = req.params;
        const incident = await Incident.findById(id);
        if(!incident){
            return res.status(404).json({message : 'Incident not found'});
        }
        
        res.status(200).json(incident);
    } catch(error){
        return res.status(500).json({message : 'Invalid incident ID'});
    }
};


// delete incident by id 

export const deleteIncident = async (req, res) => {
    try{
        const incident = await Incident.findByIdAndDelete(req.params.id);
        if(!incident) return res.status(404).json({message: "incident not found"});
        return res.status(200).json({message: "Incident deleted successfully"});
    } catch(error){
        return res.status(500).json({message:"Error deleting incident"});
    }
};