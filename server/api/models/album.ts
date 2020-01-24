import { createSchema, Type, typedModel } from 'ts-mongoose';

import { ArtistSchema } from './artist';

export const AlbumSchema = createSchema(
  {
    title: Type.string({ required: true }),
    year: Type.string({ required: true }),
    rating: Type.string({ required: true }),
    releaseDate: Type.date({ required: true }),
    artists: Type.array({ required: false }).of(ArtistSchema),
  },
  { timestamps: { createdAt: true } }
);

export const AlbumModel = typedModel('Album', AlbumSchema);
