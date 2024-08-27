import Joi from "joi";
import { Donation } from "../protocols/donate-type";

export const createDonateSchema = Joi.object<CreateDonationParams>({
    value: Joi.number().required(),
    helpId: Joi.string().required(),
});

export type CreateDonationParams = Pick<Donation, "value" | "helpId" | "userId">;