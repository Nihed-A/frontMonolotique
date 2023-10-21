import { Component, OnInit } from '@angular/core';
import {User} from "../../frontoffice/user_core/_models/user";
import {UserService} from "../../frontoffice/user_core/_services/user.service";

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  listUsers: any[];
  user!: User;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();

    this.user = {
      password: "",
      Location: "",
      country: "",
      email: "",
      experienceYears: 0,
      forumStatus: undefined,
      id: 0,
      identifiant: "",
      image: undefined,
      kind: "",
      phoneNumber: "",
      professorDiploma: "",
      studentLevel: "",
      studentSpeciality: undefined,
      token: "",
      tokenCreationDate: undefined,
      userName: "",
      verificationCode: "",
      verified: false
    }
  }

  private getAllUsers() {
    this.userservice.getUsers().subscribe({
      next: (data) => {
        this.listUsers = data.users;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  ActivateUser(idUser:any)
  {this.userservice.activateUser(idUser).subscribe()}
}
