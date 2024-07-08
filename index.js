import express from "express";

// create server
const app = express();






// listen for incoming requests
const port = process.env.PORT || 9000;
app.listen(port, () => {
console.log(`App is listening on port ${port}`)
});