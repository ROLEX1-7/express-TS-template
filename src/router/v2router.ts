import express from 'express';
import { PingHandler2} from '../controller/pinghandler2.ts';

export const v2Router = express.Router();

v2Router.get('/ping' ,PingHandler2 );