import { Router } from 'express';

const router = Router();

router.get('/', function (request, response) {
    response.send('Hello world');
});

export default router;
