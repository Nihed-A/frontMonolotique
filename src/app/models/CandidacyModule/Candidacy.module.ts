import { User } from '../UserModule/User.module';
import { Offer } from '../OfferModule/Offer.module';
import { StatusCandidacy } from '../CandidacyModule/StatusCandidacy';
import { Profil } from '../OfferModule/Profil';
import { Disponibilite } from '../CandidacyModule/Disponibilite';
import { DomainCandidacy } from '../CandidacyModule/DomainCandidacy';
export class Candidacy {
    idCandidacy!: number;
    cv!: string;
    coverLetter!: string;
    certificate!: string;
    firstName!: string;
    lastName!: string;
    email!: string; 
    dateCandidacy!: Date;
    telephoneNumber!: number;
    address!: string;
    postalCode!: number;
    moyenneGenerale!:number;
    scoree!: number;
    anneeExperience!: number;
    profil!: Profil;
    domainCandidacy!: DomainCandidacy;
    statusCandidacy!: StatusCandidacy;
    disponibilite!: Disponibilite;
    user!: User;
    offer!: Offer;


  }