import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from '../services/claim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  constructor(private claimService: ClaimService, private router: Router) { }

  ngOnInit(): void {
  }
  claim: Claim=new Claim();

  onSubmit() {
    console.log(this.claim);
    this.saveClaim();
    window.location.reload();
  }

  saveClaim(){
    this.claimService.createAlert(this.claim).subscribe(alert => {
    },
    error => {
      console.log(error);
    });
  }
}
