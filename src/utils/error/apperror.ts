export interface appError extends Error{
    statuscode : number
}

export class serverError implements appError{
    statuscode: number;
    name: string;
    message: string;

    constructor( message : string){
        this.statuscode = 500;
        this.name = "server error";
        this.message = message;
    }

}