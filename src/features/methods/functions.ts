import { z } from "zod";
import { loginSchema } from "../authentication/types/types";

export function getLogin(value: z.infer<typeof loginSchema>) {
    console.log(value)

}