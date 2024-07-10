import express from "express";
import { dbconnection } from "./config/db.js";
// create server
const app = express();

// Database connection
dbconnection();

app.use(express.json());

// listen for incoming requests
const port = process.env.PORT || 9000;
app.listen(port, () => {
console.log(`App is listening on port ${port}`)
});