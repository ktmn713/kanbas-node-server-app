import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import UserRoutes from './users/routes.js';
// import session from "express-session";


mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors());
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app)
Hello(app)
Lab5(app)
app.listen(4000);