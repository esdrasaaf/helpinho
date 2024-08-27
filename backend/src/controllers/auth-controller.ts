import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import { database } from "../config/database";
import { SignInParams } from "../schemas/auth-schema";
import { SignUpParams } from "../schemas/new-user-schema";
import { Request, Response } from "express";
import { User } from "../protocols/user-type";
import { Session } from "../protocols/session-type";

//Sign-up 

export async function signUpPost(req: Request, res: Response) {
    const bodyData = req.body as SignUpParams;

    // User already exist
    const user = database.user.find(user => user.email === bodyData.email);
    if (user) return res.sendStatus(httpStatus.CONFLICT);

    bodyData.password = await bcrypt.hash(bodyData.password, 12);

    database.user.push(new User(bodyData));
    return res.status(httpStatus.CREATED).json(bodyData);
}

//Sign-in
export async function signInPost(req: Request, res: Response) {
    const bodyData = req.body as SignInParams;

    //Email validation
    const user = database.user.find(user => user.email === bodyData.email);
    if (!user) return res.sendStatus(httpStatus.UNAUTHORIZED);

    //Password validation
    const isValid = await bcrypt.compare(bodyData.password, user.password);
    if(!isValid) return res.sendStatus(httpStatus.UNAUTHORIZED);

    //Init session
    const token = uuid();
    const sessionIndex = database.session.findIndex(s => s.id === user.id);
    if (sessionIndex < 0) {
        database.session.push(new Session(user.id, token));
    } else {
        database.session[sessionIndex] = new Session(user.id, token);
    }

    //User object return
    const returnUser = {
        name: user.name,
        email: user.email,
        image: user.image,
    }

    //Return
    return res.status(httpStatus.CREATED).json({ user: returnUser, token })
}