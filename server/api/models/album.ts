import { createSchema, Type, typedModel } from 'ts-mongoose';

const AlbumSchema = createSchema(
  {
    title: Type.string({ required: true }),
    year: Type.string({ required: true }),
    rating: Type.string({ required: true }),
    releaseDate: Type.date({ required: true }),
  },
  { timestamps: { createdAt: true } }
);

export const Album = typedModel('Album', AlbumSchema);