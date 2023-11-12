import express, { Request, Response } from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artist.routes';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import dotenv from "dotenv";

require('dotenv').config({path:__dirname+'/../.env'})

const app = express();
const port = process.env.PORT;
console.log(process.env.MY_SQL_DB_USER)

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if (process.env.NODE_ENV == 'development'){
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>');
});

app.use('/', [albumsRouter, artistsRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

