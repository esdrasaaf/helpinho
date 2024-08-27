import { v4 as uuid } from "uuid";
import { CreateHelpParams } from "../schemas/help-schema";

export class Help {
    id: string;
    background: string;
    title: string;
    description: string;
    category: string;
    currentValue: number;
    totalValue: number;
    userId: string;
    urgent: boolean;
    created: Date;
    updated: Date;
   
    constructor(bodyData: CreateHelpParams) {
      const { background, title, description, category, totalValue, userId } = bodyData;
      
      this.id = uuid();
      this.background = background;
      this.title = title;
      this.description = description;
      this.category = category;
      this.currentValue = 0;
      this.totalValue = totalValue;
      this.userId = userId;
      this.urgent = false;
      this.created = new Date();
      this.updated = new Date();
    }
  }