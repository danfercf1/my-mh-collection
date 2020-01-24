import { createSchema, Type, typedModel } from 'ts-mongoose';

export const ArtistSchema = createSchema(
  {
    firstName: Type.string({ required: true }),
    lastName: Type.string({ required: true }),
    birthDate: Type.date({ required: true }),
  },
  { timestamps: { createdAt: true } }
);

export const ArtistModel = typedModel('Artist', ArtistSchema);
