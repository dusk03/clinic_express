import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connetDB from './config/connectDB'

require('dotenv').config()

let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connetDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Backend Nodejs is runing on the port: " + port)
})

// npm install --save-exact @babel/core@7.25.8 @babel/node@7.25.7 @babel/preset-env@7.25.8