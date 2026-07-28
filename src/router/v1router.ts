import express from 'express';
import {Pinghandler} from "../controller/pinghandler.ts";
import { PingHandler2 } from '../controller/pinghandler2.ts';
import { PingHandlerpost } from '../controller/PingHandlerpost.ts';
import {z} from 'zod';
import { pingschema } from '../validation/pingvalschema.ts';
import { pingvalidator } from '../validation/index.ts';
import { errPingHandlerpost } from '../controller/errPingHandlerpost.ts';


export const v1router = express.Router();

v1router.post('/ping' ,pingvalidator(pingschema) ,  PingHandlerpost);
v1router.post('/ping/err' , errPingHandlerpost);
v1router.get('/ping' , Pinghandler);

//  export default vonerouter;

