import { Router } from 'express';
import express from 'express';
import { User } from '../models/users';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();
const router = Router();
const toJSON = express.json({ type: '*/*' });
const accessTokenSecret = process.env.JWT;

router.get('/users', async (request, response) => {
    const users = await User.find({});
    try {
        response.status(200).send(users);
    } catch (err) {
        console.log(err);
        return err;
    }
});

router.post('/users/create', toJSON, async (request, response) => {
    try {
        console.log(request.body);
        if (!request.body) {
            return response.sendStatus(400);
        }
        const user = new User({
            username: request.body.register.username,
            password: request.body.register.password,
        });
        if (accessTokenSecret !== undefined && user) {
            const accessToken = jwt.sign(
                { username: request.body.register.username, password: request.body.register.password },
                accessTokenSecret,
            );
            response.json({ accessToken });
            await user.save();
        }
    } catch (err) {
        console.log(err);
        return err;
    }
});

router.post('/users/detail', toJSON, async (request, response) => {
    try {
        console.log(request.body);
        const user = await User.find({ _id: request.body.id });
        try {
            return response.send(user);
        } catch (err) {
            return 'Error: user not founded !';
        }
    } catch (err) {
        console.log(err);
        return err;
    }
});

export default router;
