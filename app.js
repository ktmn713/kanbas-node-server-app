import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import "dotenv/config";
import session from "express-session";

const app = express()
app.use(cors());
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000);