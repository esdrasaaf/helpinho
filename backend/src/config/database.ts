import { Database } from "../protocols/database-type";

export const database: Database = {
    user: [],
    help: [{
        id: '1',
        background: 'https://i.pinimg.com/736x/37/d8/9f/37d89fa0319df50c1a473e07e24db45e.jpg',
        title: 'Título importante',
        description: 'Descrição importante',
        category: 'Book',
        currentValue: 0,
        totalValue: 30,
        userId: 'string',
        urgent: true,
        created: new Date,
        updated: new Date
    },
    {
        id: '2',
        background: 'https://i.pinimg.com/736x/37/d8/9f/37d89fa0319df50c1a473e07e24db45e.jpg',
        title: 'Título importante',
        description: 'Descrição importante',
        category: 'Health',
        currentValue: 3,
        totalValue: 30,
        userId: 'string',
        urgent: true,
        created: new Date,
        updated: new Date
    }],
    session: [],
    donation: [],
}