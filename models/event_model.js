import { Schema, model, Types } from "mongoose";


const eventSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    collegeId: { type: Types.ObjectId, ref: 'CollegeModel', require: true },
    location: { type: String,require: true },
    date: { type: Date, require: true },
    tags: [{ type: String }],
    type: {type: String, enum: ['online', 'offline'] },
    banner: {type: String,},
    createdBy: {type: Types.ObjectId}
    
}, {
    timestamps: true
});

export const eventModel = model('EventModel', eventSchema);