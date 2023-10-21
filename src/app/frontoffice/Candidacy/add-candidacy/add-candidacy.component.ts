import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidacyService } from '../../services/Candidacy/candidacy.service';
import { Candidacy } from 'src/app/models/CandidacyModule/Candidacy.module';



@Component({
  selector: 'app-add-candidacy',
  templateUrl: './add-candidacy.component.html',
  styleUrls: ['./add-candidacy.component.scss']
})
export class AddCandidacyComponent implements OnInit {

  candidacy: Candidacy = new Candidacy();
  submitted = false;

  constructor(private candidacyService: CandidacyService,
    private router: Router) { }

    map: any;

    ngOnInit() {
      
    }

  newEmployee(): void {
    this.submitted = false;
    this.candidacy = new Candidacy();
  }

  save() {
    this.candidacyService
      .createCandidacy(this.candidacy)
      .subscribe({
        next: data => {
          console.log(data);
          this.candidacy = new Candidacy();
          this.gotoList();
        },
        error: error => console.log(error)
      });
  }
  

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/addCandidacy']);
  }

  onFileSelected(candidacy: any) {
    const file = candidacy.target.files[0];
    this.candidacy.cv = file.name;
  }

  /*onFileSelected1(candidacy: any) {
    const file = this.candidacy.target.files[0];
    this.candidacy.coverLetter = file.name;
  }*/

 /* onFileSelected2(candidacy: any) {
    const file = this.candidacy.target.files[0];
    this.candidacy.certificate = file.name;
  }*/

  }
