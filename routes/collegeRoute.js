import { Router } from "express";
import { getColleges, getCollegeById, postCollege, patchCollegebyId, deleteCollegebyId } from "../controllers/collegeController.js";

const collegeRouter = Router();

collegeRouter.get('/colleges', getColleges);
collegeRouter.get('/colleges/id', getCollegeById);
collegeRouter.post('/colleges/id', remoteUpload.single('image'), postCollege);
collegeRouter.patch('/colleges/id', patchCollegebyId);
collegeRouter.delete('/colleges/id', deleteCollegebyId);

export default collegeRouter;