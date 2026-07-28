import express from "express";
import {v1router} from "./router/v1router.ts";
import {v2Router} from "./router/v2router.ts";
import { IndexRouter } from "./router/indexrouter.ts";
import {newroute} from './router/newroute.ts';
import {z} from 'zod';
import logger from "./config/logger.config.ts";

// import loadenv from "./config";
// import loadenv from "./config/index.js";
// import { envloader } from "./config/index.js";
// import {Pinghandler} from "./controller/pinghandler.ts";

import {serverConfig} from "./config/index.ts";
import {pingErrorHandler} from './middleware/pingerr.ts'
import { corelationattacher } from "./middleware/corelation.middleware.ts";
const app = express();
// const PORTY : number = 3002;

// app.get('/ping',Pinghandler);

app.use(express.json());

app.use(corelationattacher);
app.use('/' , IndexRouter);
app.use('/' , newroute);
app.use('/' , pingErrorHandler);
// app.use('/v1',v1router);
// app.use('/v2',v2Router);


// loadenv();
// console.log("env loaded");

    const PORT = serverConfig.PORT;
    console.log(`PORT is ${PORT}`);

app.listen( PORT , ()=>{
    logger.info(`listening on PORT ${PORT}`)
    logger.info( "process SERVER_NAME" , {"SERVER-NAME" : process.env.SERVER_NAME});
    console.info("hey");
}
)

const obj = {
    name : "shetty",
    code : 17

};

const objschema = z.object({
    name : z.string(),
    code : z.number().int()
});

console.log(objschema.safeParse(obj));

