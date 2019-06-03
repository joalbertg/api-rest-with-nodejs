if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

import express, { json } from 'express';

// Routes
import IndexRoutes from './routes/index.routes';
import TasksRoutes from './routes/tasks.routes';

const app = express();

// Middlewares
app.use(json());

app.use(IndexRoutes);
app.use('/tasks', TasksRoutes);

// Settings
app.set('port', process.env.PORT || 3000)

export default app;
