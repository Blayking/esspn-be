import dotenv from 'dotenv';

import express from 'express';
import { connect } from 'mongoose';

import { userController } from './user';
import { communityController } from './community';

dotenv.config();

const app = express();


connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: false }, () => {
    console.log(`Connected to ${process.env.MONGO_URL}`);
});

app.use(express.json());

// apply routes
app.use('/users', userController);
app.use('/communities', communityController);


const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`App started at port ${port}`);
});