import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../services/claim.service';
import { Claim } from 'src/app/models/claim';

@Component({
  selector: 'app-list-claim',
  templateUrl: './list-claim.component.html',
  styleUrls: ['./list-claim.component.css']
})
export class ListClaimComponent implements OnInit {

  constructor(private claimService: ClaimService, private router:Router) { }

  ngOnInit(): void {
    this.getclaimList();
  }

  public claims:Claim[];
  private getclaimList(){
    this.claimService.getAllClaims().subscribe(data => {this.claims = data;
      console.log(this.claims);
    })
  }

  deleteClaim(id: number){
    this.claimService.delete(id).subscribe(data =>{
      this.getclaimList;
    });
    window.location.reload();
  }
}
