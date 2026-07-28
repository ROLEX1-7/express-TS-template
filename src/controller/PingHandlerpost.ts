import console from "console";
import type { Request , Response } from "express"; 
import logger from "../config/logger.config.ts";
import { corelationattacher } from "../middleware/corelation.middleware.ts";

export function PingHandlerpost( req : Request , res : Response){

    logger.info("REQ RECIEVED" );
    res.status(201).send("GOT POST" );
    console.log( req.params);
    console.log("params" , req.query);
    console.log( "req body" , req.body);
    
}