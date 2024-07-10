import { eventModel } from "../models/event_model.js";

// post an event
export const addEvent = async (req, res, next) => {
    try {
        const addData = await (eventModel.create(req.body));
        res.status(200).send(addData)
    } catch (error) {
        next(error)

    }
};
//  get one event
export const getOneEvent = async (req, res) => {
    try {
        console.log('request', req.body);
        const getEventId = await (eventModel.findById(req.params.id));
        res.status(200).send(getEventId)
    } catch (error) {
        console.log(error)

    }
};
// get all event
export const getAllEvent = async (req, res, next) => {
    try {
        
        const allEvent = await eventModel.find();
        res.status(200).send(allEvent)
    } catch (error) {
        next(error)

    }
};

// update event
export const updateEvent = async (req, res) => {
    try {
        const newEvent = await (eventModel.findByIdAndUpdate(req.params.id, req.body));
        res.status(200).send(newEvent)
    } catch (error) {
        console.log(error)

    }
};

// Delete event
export const deleteEvent = async (req, res) => {
    try {
        const removeEvent = await (eventModel.findByIdAndDelete(req.params.id, req.body));
        res.status(200).send(removeEvent)
    } catch (error) {
        console.log(error)

    }
};