const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');

const body_parser = require('body-parser');

const material_controller=require('./material_controller');

// Terminaaliin installoidut
// npm init 
// npm install express
// npm install mongoose
// npm install nodemon --save-dev
// npm run start-dev


app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended:true
})); // material/id

app.use(  (req, res, next)=>{
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/materials

// RESTful API
// CRUDS OPERATIONS

// CREATE
app.post("/api/material", material_controller.api_post_material);
// READ
app.get("/api/materials", material_controller.api_get_materials);
// UPDATE

// DELETE

const database_uri = "mongodb+srv://server:0nq9DRRFOyM7rymp@cluster0-hy4nf.mongodb.net/materialdb?retryWrites=true&w=majority";

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(()=> {
    console.log("Database connected");
    app.listen(port);
}).catch(err => {
    console.log(err);
});

