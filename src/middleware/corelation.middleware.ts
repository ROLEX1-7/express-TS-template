import  express from 'express'
import type { Request, Response , NextFunction } from 'express'
import {v4 as uuidv4} from 'uuid'
import { Reqbagstorage } from '../utils/helper/req.helper.ts';

export const corelationattacher = (req : Request , res : Response , next : NextFunction) =>{
    const iD = uuidv4();
    req.headers["Id-of-Request"] = iD;

    Reqbagstorage.run( { corelationId : iD} ,  ()=>{next();} );

}