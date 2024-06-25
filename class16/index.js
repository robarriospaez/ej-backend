import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import databaseRoutes from './routes/databaseRoutes.js';
import responseTimeLogger from './middlewares/responseTimeLogger.js';
import requestLogger from './middlewares/requestLogger.js';

dotenv.config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORTPORT || 3000;

app.use(bodyParser.json());

app.use(responseTimeLogger);
app.use(requestLogger);

// Configura las rutas
app.use('/countries', databaseRoutes);

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on ${SERVER_PORT}`);
});