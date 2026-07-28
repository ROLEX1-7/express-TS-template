import type { Request, Response, NextFunction } from "express";
import type { AnyZodObject } from "zod/v3";
import logger from "../config/logger.config.ts";

export function pingvalidator(schema: AnyZodObject) {
    async function f(req: Request, res: Response, next: NextFunction) {
        try {
            logger.info("VALIDATING REQ");
            await schema.parseAsync(req.body);
            logger.info("REQ IS VALID");
            console.log("Request body is valid");

            next();
        } catch (err) {
            logger.error("REQ IS INVALID");
            return res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: err
            });
        }
    }

    return f;
}