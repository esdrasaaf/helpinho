import { v4 as uuid } from "uuid";
import { SignUpParams } from "../schemas/new-user-schema";

export class User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    number: string;
    password: string;
    image: string;
    created: Date;
    updated: Date;

    constructor(bodyData: SignUpParams) { 
        const { name, cpf, email, number, password } = bodyData;
        this.id = uuid();
        this.name = name; 
        this.email = email;
        this.cpf = cpf;
        this.number = number
        this.password = password;
        this.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGIriHwMYbjKJI76jDDK8KzXXSZhiNKGs9g&s'
        this.created = new Date()
        this.updated = new Date()
    }
}