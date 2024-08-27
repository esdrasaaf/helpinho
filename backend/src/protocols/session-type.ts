import { v4 as uuid } from "uuid";

export class Session {
    id: string;
    userId: string;
    token: string;
    created: Date;
    updated: Date;
   
    constructor(userId: string, token: string) {
      this.id = uuid();
      this.userId = userId;
      this.token = token;
      this.created = new Date();
      this.updated = new Date();
    }
  }