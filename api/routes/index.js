import express from 'express';
import { config } from 'dotenv';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Emre', config });
});

export default router;
