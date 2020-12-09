import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json({
        key: 'test'
    });
});

export default router;