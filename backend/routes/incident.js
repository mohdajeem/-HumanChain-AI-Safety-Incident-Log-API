import express from "express";
import {
    getAllIncident,
    getIncidentById,
    createIncident,
    deleteIncident
} from '../controllers/incidentController.js';

const router = express.Router();

router.get('/',getAllIncident);
router.post('/',createIncident);
router.get('/:id',getIncidentById);
router.delete('/:id',deleteIncident);

export default router;