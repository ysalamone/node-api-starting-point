import { Application } from 'express';
import pubs from './pubs';

export default (app: Application): void => {
    app.use('/pubs', pubs);
    // app.use('/barathon', barathon);
};