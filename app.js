const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const body_parser = require('body-parser');

const material_controller=require('./material_controller');

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

// READ
app.get("/api/materials", material_controller.api_get_materials);
// UPDATE

// DELETE


app.listen(port);