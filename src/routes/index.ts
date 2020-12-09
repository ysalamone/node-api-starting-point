// src/routes/index.ts

// ce fichier vient associer tous nos routes aux urls de base qui
// leur sont associés
import { Application } from 'express';
import pubs from './pubs';

export default (app: Application): void => {
    app.use('/pubs', pubs);
    // app.use('/barathons', barathon);
};