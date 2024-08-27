import Joi from "joi";
import { User } from "../protocols/user-type";

export const createUserSchema = Joi.object<SignUpParams>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    cpf: Joi.string().required(),
    number: Joi.string().required(),
});

export type SignUpParams = Pick<User, "name" | "email" | "cpf" | "number" | "password">;