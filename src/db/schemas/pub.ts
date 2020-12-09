// src/db/schemas/pub.ts
import { Schema } from 'mongoose';
import { ICustomSchema } from '../../types/database';

// Comment à une structure un peu complexe, il mérite son propre schéma
const Comment: Schema = new Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: Number, required: true }
});

// nous n'exportons pas un schémas, mais un ICustomSchema
// notre surcouche custom au schema mongoose
// cela est utile pour l'initalisation des modèles, car il porte
// l'information 'collection' en plus
const pubSchema: ICustomSchema = {
    collection: 'pubs',
    definition: new Schema({
        name: { type: String, required: true }, // les types définis ici sont des types Mongoose, ils n'ont rien à voir avec TS
        description: { type: String, required: false },
        latlng: {
            lat: { type: String, required: true },
            lng: { type: String, required: true }
        },
        comments: { type: [Comment], required: false }
    })
};

export default pubSchema;