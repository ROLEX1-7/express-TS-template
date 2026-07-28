//contains basic congiguration logic for the server to work
// import dotenv from "dotenv";

// function envloader(){
//     dotenv.config();
// }

// export default envloader;

import dotenv from "dotenv";


function loadenv(){
    dotenv.config();
}
// dotenv.config();

loadenv();
    // dotenv.config();


console.log("env loaded");

type ServerConfig = {
    PORT : number;
}

export const serverConfig : ServerConfig = {
    PORT : Number(process.env.PORT) || 8080
}

