import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import winston from 'winston';

config();

const modelsPath = `${__dirname}/models`;

const database = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  models: [modelsPath],
});

const databaseConnection = async () => {
  try {
    await database.authenticate();
    winston.info('💾 Database connected');
  } catch (error) {
    winston.error(`Unable to connect to the database: ${error}`);
  }
};

export { database, databaseConnection };
export { User } from './models/User';
