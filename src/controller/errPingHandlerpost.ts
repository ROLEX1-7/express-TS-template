import type {Request , Response , NextFunction } from 'express'
import fs from 'fs/promises'
import type { appError } from '../utils/error/apperror.ts';
import { serverError } from '../utils/error/apperror.ts';

export async function errPingHandlerpost( req : Request , res : Response , next : NextFunction ){
    try{
        const data =  await fs.readFile("sample");
        res.status(200).json({ message : data.toString()})
    }
    catch(err){
        throw new serverError("custom throw of server error");
    }
}

// export async function errPingHandlerpost( req : Request , res : Response , next : NextFunction ){
    
//         const data =  await fs.readFile("sample");
//         res.status(200).json({ message : data.toString()})
    
    
    
// }