import type { Response , Request, NextFunction } from "express";

export function checker( req : Request ,  res : Response , next : NextFunction ) : void{
    if(req.body.code != 17){
        res.status(400).send("Wrong code");
    }

    next();
}

export function newPingHandler( req : Request ,  res : Response ) : void{
    res.status(200).json({
        "message" : "Pongy new wala",
        "params" : req.params
    });
    console.log( req.params);
        console.log("params" , req.query);
        console.log( "req body" , req.body);
}