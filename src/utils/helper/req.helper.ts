import { AsyncLocalStorage } from "async_hooks";

type Requestbag = {
    corelationId: string
}

export const Reqbagstorage = new AsyncLocalStorage<Requestbag>();

export const getcurcorelationId = ()=>{
    const currReqbag = Reqbagstorage.getStore();

    if( currReqbag == undefined) return "NO-correlatio-Id";
    else return currReqbag.corelationId;


}