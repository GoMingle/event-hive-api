import { Schema, model } from "mongoose";


const collegeSchema = new Schema({
    name: {type: String},
    description: {type: String},
    banner: {type: String, required: true},
    location: {type: String, required: true},
    rating: {type: Number, required: true}
}, {
    timestamps: true
})

export const CollegeModel = model('CollegeModel', collegeSchema);