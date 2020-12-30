import { Router } from 'express';

import { createUser, getUsers, getUserById } from './user.service';
import { InvalidUser } from './errors';

const userController = Router();

userController.get('/:id', async (req, res, next) => {
    try {
        const userId = req.params.id;

        const user = await getUserById(userId);
    
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
});

userController.get('/', async (_req, res) => {
    try {
        const users = await getUsers();

        res.status(200).send({ users });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

userController.post('/', async (req, res) => {
    try {
        const user = req.body;

        await createUser(user);

        res.send(200).send({ message: 'user created' });
    } catch(error) {
        const errorCode = error instanceof InvalidUser ? 400 : 500;

        res.status(errorCode).send({ message: error.message });
    }
});


export { userController };