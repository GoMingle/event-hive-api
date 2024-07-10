import express from "express";
import collegeRouter from "./routes/collegeRoute";
import { dbconnection } from "./config/db.js";
import cors from 'cors';

// create server
const app = express();

app.use(collegeRouter);
app.use(cors());


// Database connection
dbconnection();

app.use(express.json());

// listen for incoming requests
const port = process.env.PORT || 9000;
app.listen(port, () => {
console.log(`App is listening on port ${port}`)
});