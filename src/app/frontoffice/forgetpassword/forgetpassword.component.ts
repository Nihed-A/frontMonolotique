import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user_core/_services/auth.service";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  forgetpasswordwithemail()
  {
    this.authService.forgetpassword(this.email,0).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });

    //this.route.navigate(['/reset-password']);
  }
  forgetpasswordwithsms()
  {
    this.authService.forgetpassword(this.email,1).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });

    //this.route.navigate(['/reset-password']);
  }

}
