import { RequestHandler } from 'express';
import { User } from '../models/users';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const accessTokenSecret = process.env.JWT;

export const getAllUsers = async (request: any, response: any): Promise<RequestHandler | string | undefined> => {
    try {
        const users = await User.find({});
        try {
            response.status(200).send(users);
        } catch (err) {
            console.log(err);
            return err;
        }
    } catch (err) {
        console.log(err);
        return 'Users not founded';
    }
};

export const registerUser = async (request: any, response: any): Promise<RequestHandler | string | undefined> => {
    if (!request.body) {
        return response.sendStatus(500);
    } else {
        try {
            const user = new User({
                username: request.body.register.username,
                password: request.body.register.password,
            });
            if (accessTokenSecret !== undefined && user) {
                const accessToken = jwt.sign(
                    { username: request.body.register.username, password: request.body.register.password },
                    accessTokenSecret,
                );
                await user.save();
                return response.json({ accessToken });
            } else {
                return response.sendStatus(500);
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};

export const getUserDetail = async (request: any, response: any): Promise<RequestHandler | string | undefined> => {
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
};
