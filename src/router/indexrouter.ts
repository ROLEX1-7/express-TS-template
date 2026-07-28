import express from 'express';

import { v1router } from './v1router.ts';
import { v2Router } from './v2router.ts';
export const IndexRouter = express.Router();


IndexRouter.use('/v1' , v1router);
IndexRouter.use('/v2' , v2Router);
