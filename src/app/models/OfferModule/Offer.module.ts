import { Candidacy } from '../CandidacyModule/Candidacy.module';
import { User } from '../UserModule/User.module';
import { Advantages } from './Advantages';
import { Commentaire } from './Commentaire.module';
import { Destination } from './Destination';
import { Duration } from './Duration';
import { Profil } from './Profil';

export class Offer {
    idOffre!: number;
    title!: string;
    image!: string;
    dateOffre!: Date;
    offerCreationDate!: Date;
    nbreCandidats!: number;
    profil!: Profil;
    destination!: Destination;
    duration!: Duration;
    conditions!: string;
    advantages!: Advantages;
    user!: User;
    candidacies!: Candidacy[];
    commentaires!: Commentaire[];

  }
