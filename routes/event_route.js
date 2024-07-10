import { Router } from "express";

import { addEvent, getOneEvent, getAllEvent, updateEvent, deleteEvent } from "../controllers/event_controller.js";


const eventRouter = Router();
eventRouter.post('/event', addEvent);
eventRouter.get('/oneEvent/:id', getOneEvent );
eventRouter.get('/allEvent', getAllEvent);
eventRouter.patch('/event/:id', updateEvent);
eventRouter.delete('/event/:id', deleteEvent);
