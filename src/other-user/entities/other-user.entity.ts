import { Prisma } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class OtherUser implements Prisma.UserGetPayload<{}> {
  id: number;
  name: string;
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<OtherUser>) {
    Object.assign(this, partial);
  }
}
