import { Router } from 'express';
import express from 'express';
import { getAllUsers, registerUser, getUserDetail, loginUser } from '../services/user-service';

const router = Router();
const toJSON = express.json({ type: '*/*' });

router.get('/users', async (request, response) => await getAllUsers(request, response));
router.post('/users/create', toJSON, async (request, response) => await registerUser(request, response));
router.post('/users/detail', toJSON, async (request, response) => await getUserDetail(request, response));
router.post('/users/login', toJSON, async (request, response) => await loginUser(request, response));

export default router;
