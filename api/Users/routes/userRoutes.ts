import { Router } from 'express';
import { User } from '../models/users';

const router = Router();

router.get('/users', async (request, response) => {
    const users = await User.find({});
    try {
        response.status(200).send(users);
    } catch (err) {
        console.log(err);
        return err;
    }
});

router.post('/users/create', async (request, response) => {
    try {
        const user = new User({
            username: request.body.username,
            password: request.body.password,
        });
        await user.save();
    } catch (err) {
        console.log(err);
        return err;
    }
});

export default router;
