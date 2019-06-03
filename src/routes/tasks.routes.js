import { Router } from 'express';

// Database connection
import connect from '../database';

const router = Router();

router.get('/', async (req, res) => {
  const db = await connect();
  const result = await db.collection('task').find({}).toArray();

  res.json(result);
});

router.post('/', async (req, res) => {
  const db = await connect();
  const { title, description } = req.body;
  const task = { title, description }
  const result = await db.collection('task').insertOne(task);
  res.json(result.ops[0]);
});

export default router;