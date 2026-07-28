import winston, { transports } from 'winston'
import { getcurcorelationId } from '../utils/helper/req.helper.ts';

const logger = winston.createLogger({
    format : winston.format.combine(
        winston.format.timestamp({ format : "DD-MM-YYYY HH:MM:SS"}),
        winston.format.json(),


        winston.format.printf(function f({level , message , timestamp , ...data}){
            const output = {level , message , timestamp ,
                corelationId : getcurcorelationId()
                ,data};
            return JSON.stringify(output);
        })
    ),

    transports : [
        new winston.transports.Console()
    ]
});

export default logger;