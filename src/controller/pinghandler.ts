import type {Request , Response} from 'express';

export function Pinghandler( req : Request , res : Response) : void{
    res.send("pong");
    console.log("query params" , req.query);
}
