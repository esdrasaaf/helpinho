import httpStatus from "http-status";
import { database } from "../config/database";
import { Request, Response } from "express";
import { CreateHelpParams } from "../schemas/help-schema";
import { Help } from "../protocols/help-type";
import { AuthenticatedRequest } from "../middlewares/session-validation";
import { CreateDonationParams } from "../schemas/donate-schema";
import { Donation } from "../protocols/donate-type";

export async function createHelp(req: Request, res: Response) {
    const userId = (req as AuthenticatedRequest).userId;
    const bodyData = { ...req.body, userId } as CreateHelpParams;

    // User exist
    const user = database.user.find(user => user.id === userId);
    if (!user) return res.status(httpStatus.CONFLICT).send('Usuário inexistente');

    database.help.push(new Help(bodyData));
    return res.status(httpStatus.CREATED).send(bodyData);
};

export async function putHelp(req: Request, res: Response) {
    const userId = (req as AuthenticatedRequest).userId;
    const bodyData = { ...req.body, userId } as CreateDonationParams;

    console.log(userId, bodyData);

    // User exist
    const user = database.user.find(user => user.id === userId);
    if (!user) return res.status(httpStatus.NOT_FOUND).send('Usuário inexistente');

    //Help exist
    const help = database.help.find(help => help.id === bodyData.helpId);
    if (!help) return res.status(httpStatus.NOT_FOUND).send('Help inexistente');

    //Help exist
    const donate = database.donation.find(donate => donate.helpId === bodyData.helpId && donate.userId === bodyData.userId);
    if (!donate) {
        //Validations
        if (user.id === help.userId) return res.sendStatus(httpStatus.BAD_REQUEST);
        if (help.currentValue >= help.totalValue) return res.sendStatus(httpStatus.BAD_REQUEST);
        if ((help.currentValue + bodyData.value) > help.totalValue) {
            bodyData.value = help.totalValue - help.currentValue;
        }
        
        //Put current help value
        help.currentValue += Number(bodyData.value);
    
        //Add Donation info on db
        database.donation.push(new Donation(bodyData));
    } else {
        donate!.value += Number(bodyData.value);
    }

    return res.status(httpStatus.OK).send(new Donation(bodyData));
};

export async function getAllHelps(req: Request, res: Response) {
    const response = [];
    const helpers = [];
    


    for (let index = 0; index < database.help.length; index++) {
        const { id, title, description, category, background, userId, urgent, currentValue, totalValue } = database.help[index];
        const user = database.user.find(user => user.id === userId);

        for (let index = 0; index < database.donation.length; index++) {
            const { id } = database.help[index];
            helpers.push(database.donation.find(donate => donate.helpId === id));
        }
        
        response.push({
            id,
            title,
            description,
            category,
            background,
            author: {
              photo: user?.image,
              email: user?.email,
              name: user?.name,
              id: user?.id
            },
            urgent,
            currentValue,
            totalValue,
            helpers
        });
    }

    return res.status(httpStatus.OK).json(response);
};

export async function getByCategory(req: Request, res: Response) {
    const reqCategory = req.params.category;
    let response = [];
    const helpers = [];
    
    for (let index = 0; index < database.donation.length; index++) {
        const { id } = database.help[index];
        helpers.push(database.donation.find(donate => donate.helpId === id));
    }

    for (let index = 0; index < database.help.length; index++) {
        const { id, title, description, category, background, userId, urgent, currentValue, totalValue } = database.help[index];

        if (reqCategory == category) {
            const user = database.user.find(user => user.id === userId);

            response.push({
                id,
                title,
                description,
                category,
                background,
                author: {
                  photo: user?.image,
                  email: user?.email,
                  name: user?.name,
                  id: user?.id
                },
                urgent,
                currentValue,
                totalValue,
                helpers
            });
        }
    }

    return res.status(httpStatus.OK).json(response);
};

export async function getById(req: Request, res: Response) {
    const reqId = req.params.id;
    let response;
    const helpers = [];
    
    for (let index = 0; index < database.donation.length; index++) {
        const id = database.help[index].id;
        helpers.push(database.donation.find(donate => donate.helpId === id));
    }

    for (let index = 0; index < database.help.length; index++) {
        const { id, title, description, category, background, userId, urgent, currentValue, totalValue } = database.help[index];

        if (reqId == id) {
            const user = database.user.find(user => user.id === userId);

            response = {
                id,
                title,
                description,
                category,
                background,
                author: {
                  photo: user?.image,
                  email: user?.email,
                  name: user?.name,
                  id: user?.id
                },
                urgent,
                currentValue,
                totalValue,
                helpers
            };
        }
    }

    return res.status(httpStatus.OK).json(response);
};