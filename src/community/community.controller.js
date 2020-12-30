import { Router } from 'express';

const communityController = Router();

communityController.get('/', (_req, res) => {
    res.status(200).send({ communities: [
        {
            id: 1,
            name: 'dorgas',
        },
        {
            id: 2,
            name: 'potas',
        },
    ] });
});

export { communityController };