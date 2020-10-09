import { request, response, Router } from 'express';
import express from 'express';
import { getAllUsers, registerUser, getUserDetail, loginUser } from '../services/user-service';

const router = Router();
const toJSON = express.json({ type: '*/*' });

router.get('/users', async () => await getAllUsers(request, response));
router.post('/users/create', toJSON, async () => await registerUser(request, response));
router.post('/users/detail', toJSON, async () => await getUserDetail(request, response));
router.post('/users/login', toJSON, async () => await loginUser(request, response));

export default router;
