import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
require('dotenv').config();

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts',postRoutes)

const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, () => console.log(`SERVER RUNNING at ${PORT}`)))
    .catch((error)=> console.log(error.message) )
