import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import winston from 'winston';
import cors from 'cors';
import morgan from 'morgan';

import { logger } from './config/logger';
import { indexRouter } from './modules';
import { databaseConnection } from './database';

config();
logger();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1', indexRouter);
app.use((req: Request, res: Response) => {
  res.status(404).json({ status: 404, error: 'Endpoint route not found' });
});

databaseConnection();

app.listen(port, () => {
  winston.info(`Server Listening on Port: ${port}`);
});
