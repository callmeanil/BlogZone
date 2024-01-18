import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  Connection  from './database/db.js';
import Router from './routes/route.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', Router);
 if(process.env.NODE_ENV === 'production')
 {
    app.use(express.static("client/build"))
 }

const PORT = process.env.PORT || 8000; 
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.wevk8pw.mongodb.net/blog_DB`


Connection(URL);



app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
