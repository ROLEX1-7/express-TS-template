import type { Response , Request } from "express";

export function PingHandler2( req : Request ,  res : Response ) : void{
    res.send("Pongy 2 wala" );
}