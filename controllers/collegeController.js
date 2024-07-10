import { CollegeModel } from "../models/collegeModel.js";

export const getColleges = async (req, res, next) => {
    try {
        const retriveColleges = await CollegeModel.find();
        res.status(200).json(retriveColleges);
    } catch (error) {
        next(error);
    }
}

export const getCollegeById = async (req, res, next) => {
    try {
        const RetrieveCollege = await CollegeModel.findById(req.params.id);
        res.status(200).json(RetrieveCollege);
    } catch (error) {
        next(error);
    }
}

export const postCollege = async (req, res, next) => {
    try {
        const createCollege = await CollegeModel.create({
            ...req.body,
            image: req.file.filename
        });
        res.status(201).json(createCollege);
    } catch (error) {
        next(error);
    }
}

export const patchCollegebyId = async (req, res, next) => {
    try {
        const updateCollege = await CollegeModel.findByIdAndUpdate(req.params.id, req.body);
        res.json(updateCollege);
    } catch (error) {
        next(error);
    }
}

export const deleteCollegebyId = async (req, res, next) => {
    try {
        const deleteCollege = await CollegeModel.findByIdAndDelete(req.params.id);
        res.json(deleteCollege);
    } catch (error) {
        next(error);
    }
}

