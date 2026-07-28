import { z} from 'zod'
export const pingschema = z.object({
    name : z.string(),
    code : z.number().min(2)
});