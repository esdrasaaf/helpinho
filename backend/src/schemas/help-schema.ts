import Joi from "joi";
import { Help } from "../protocols/help-type";

export const createHelpSchema = Joi.object<CreateHelpParams>({
    category: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().min(4).required(),
    totalValue: Joi.number().required(),
    background: Joi.string().required(),
});

export type CreateHelpParams = Pick<Help, "category" | "title" | "description" | "totalValue" | "background" | "userId">;