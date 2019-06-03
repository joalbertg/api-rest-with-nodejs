import { Router } from 'express';

// Database connection
import connect from '../database';

const router = Router();

router.get('/', async (req, res) => {
  const db = await connect();
  const result = await db.collection('task').find({}).toArray();

  res.json(result);
});

export default router;