import type { Response , Request , NextFunction } from "express";
import type { appError } from "../utils/error/apperror.ts";
import { success } from "zod";


// export function pingErrorHandler( err : Error , req : Request , res : Response , next : NextFunction){
//     console.log("Your error is " ,err);

//     res.status(500).json({ message : "custom error handler"});

// }

export function pingErrorHandler( err : appError , req : Request , res : Response , next : NextFunction){
    console.log( err.message);

    res.status(err.statuscode).json({
        success : false,
        message : err.message
    })
}