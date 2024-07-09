import express from "express";
import collegeRouter from "./routes/collegeRoute";
import cors from 'cors';

// create server
const app = express();

app.use(express.json());
app.use(collegeRouter);
app.use(cors());

// listen for incoming requests
const port = process.env.PORT || 9000;
app.listen(port, () => {
console.log(`App is listening on port ${port}`)
});