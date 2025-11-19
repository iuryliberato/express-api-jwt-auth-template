import express, { Router } from "express";
import serverless from "serverless-http";
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const testJwtRouter = require('./controllers/test-jwt');
const authRouter = require('./controllers/auth');
const userRouter = require('./controllers/users')
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/api", router);

app.use('/test-jwt', testJwtRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);

export const handler = serverless(app);