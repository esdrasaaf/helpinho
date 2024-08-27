import Joi from "joi";
import { User } from "../protocols/user-type";

export const loginSchema = Joi.object<SignInParams>({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

export type SignInParams = Pick<User, 'email' | 'password'>