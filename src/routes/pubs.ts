// src/routes/pubs.ts
import { Router, Request, Response } from 'express';
import getModel from '../db/models';

const router = Router();

// renvoie un tableau avec tous les pubs
router.get('/', async (req: Request, res: Response): Promise<void> => {
    const pubModel = getModel('pub');

    // find sans paramètre renvoie l'ensemble des documents de la collection
    const pubs = await pubModel.find();
    res.json(pubs);
});

export default router;