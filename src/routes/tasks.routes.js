import { Router } from 'express';
import { ObjectID } from 'mongodb';

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

router.get('/:id', async (req, res) => {
  const db = await connect();
  const { id } = req.params;

  const result = await db.collection('task').findOne({ _id: ObjectID(id) });

  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const db = await connect();
  const { id } = req.params;

  const result = await db.collection('task').deleteOne({ _id: ObjectID(id) });

  res.json({
    message: `Task ${id} deleted`,
    result
  });
});

router.put('/:id', async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  const { title, description } = req.body;
  const task = { title, description }

  const result = await db.collection('task').updateOne(
    { _id: ObjectID(id) },
    { $set: task }
  );

  res.json({
    message: `Task ${id} updated`
  });
});

export default router;
