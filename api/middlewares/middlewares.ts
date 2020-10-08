import express from 'express';
import cors from 'cors';
import mainRoutes from '../routes';
import userRoutes from '../Users/routes/userRoutes';

const middleware = express();
const routes = [mainRoutes, userRoutes];

export const middlewares = [
    middleware.use(
        cors({
            origin: 'http://localhost:3000',
        }),
    ),
    middleware.use(routes),
    middleware.use(express.json({ type: '*/*' })),
];
