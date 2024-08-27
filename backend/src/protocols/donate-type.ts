import { v4 as uuid } from "uuid";
import { CreateDonationParams } from "../schemas/donate-schema";

export class Donation {
    id: string;
    value: number;
    userId: string;
    helpId: string;
    created: Date;
    updated: Date;
   
    constructor(bodyData: CreateDonationParams) {
      const { value, userId, helpId } = bodyData;
      this.id = uuid();
      this.value = value;
      this.userId = userId;
      this.helpId = helpId;
      this.created = new Date();
      this.updated = new Date();
    }
  }