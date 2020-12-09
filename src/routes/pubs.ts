// src/routes/pubs.ts
import { Router, Request, Response, NextFunction } from 'express';
import getModel from "../db/models";

const router = Router();

// renvoie un tableau avec tous les pubs
router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const pubModel = getModel('pub');

    const pubs = await pubModel.find({});

    res.json(pubs);
});

export default router;