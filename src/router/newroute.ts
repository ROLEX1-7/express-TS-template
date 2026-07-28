import express from 'express';
import { newPingHandler } from '../controller/newpinghandler.ts';
import { checker } from '../controller/newpinghandler.ts';

export const newroute = express.Router();

newroute.get('/newping/:code' ,checker, newPingHandler);