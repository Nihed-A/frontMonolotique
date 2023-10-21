import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidacyService } from 'src/app/frontoffice/services/Candidacy/candidacy.service';
import { Candidacy } from 'src/app/models/CandidacyModule/Candidacy.module';



@Component({
  selector: 'app-update1-candidacy',
  templateUrl: './update1-candidacy1.component.html',
  styleUrls: ['./update1-candidacy.component.css']
})
export class Update1CandidacyBack1Component implements OnInit {
  idCandidacy!: number;
  candidacy!: Candidacy;

  constructor(private route: ActivatedRoute, private router: Router, private candidacyService: CandidacyService) { }

  ngOnInit(): void {
    this.candidacy = new Candidacy();

    this.idCandidacy = this.route.snapshot.params['idCandidacy'];

    this.candidacyService.getCandidacyById(this.idCandidacy)
      .subscribe(data => {
        console.log(data);
        this.candidacy = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.candidacyService.updateCandidatureStatus(this.idCandidacy)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/listcandidacy1']);
      }, error => console.log(error));
  }
}