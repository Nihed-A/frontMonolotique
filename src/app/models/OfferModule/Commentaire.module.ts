import { User } from '../UserModule/User.module';

export class Commentaire {
    idComment!: number;
    description!: string;
    creationDate!: Date;
    user!: User;
  }
