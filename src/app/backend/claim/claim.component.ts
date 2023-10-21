import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/Claim/services/claim.service';
import { Router } from '@angular/router';
import { Claim } from 'src/app/models/claim';
import { Respond } from 'src/app/models/respond';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  idclaim:number;
  public claims:Claim[];
  public response:Respond;

  constructor(private claimService: ClaimService, private router:Router) { }

  ngOnInit(): void {
    this.getclaimList();
  }

  private getclaimList(){
    this.claimService.getAllClaims().subscribe(data => {this.claims = data;
      console.log(this.claims);
    })
  }

  respond(id:number, response:Respond){
    this.claimService.respondToClaim(id, response).subscribe(data =>{
    },
    error => {
      console.log(error);
    });
  }

  getId(id:number){
      this.idclaim=id;
      console.log(this.idclaim);
  }

  onSubmit() {
    console.log("lqsjknffklqsdjnf");
    console.log(this.idclaim);
    console.log(this.response);
    this.respond(this.idclaim,this.response);
    window.location.reload();
  }
}
