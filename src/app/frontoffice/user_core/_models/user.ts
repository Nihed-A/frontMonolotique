import {Image} from "./image";

export class User {
  id?: number;
  identifiant?: string;
  userName: string;
  password: string;
  email: string;
  image?: Image;
  verified?: boolean;
  token?: string;
  verificationCode?: string;
  tokenCreationDate?: Date;
  phoneNumber?: string;
  kind?: string;
  Location?: string;
  country?: string;
  studentSpeciality?: StudentSpeciality;
  studentLevel?: string;
  forumStatus?: ForumStatus;
  professorDiploma?: string;
  experienceYears?: number;
}
export enum StudentSpeciality {
  COMPUTER_SPECIALTY = "Computer Specialty",
  TELECOMMUNICATION_SPECIALTY = "Telecommunication Specialty",
  CIVIL_ENGINEERING = "Civil Engineering",
  ELECTRONIC_ENGINEERING = "Electronic Engineering"
}

export enum ForumStatus {
  ACTIVE = "Active",
  BANNED = "Banned",
  TIMEOUT = "Timeout"
}
