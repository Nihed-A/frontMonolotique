import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidacy } from 'src/app/models/CandidacyModule/Candidacy.module';
import { CandidacyService } from '../../services/Candidacy/candidacy.service';



@Component({
  selector: 'app-update-candidacy',
  templateUrl: './update-candidacy.component.html',
  styleUrls: ['./update-candidacy.component.scss']
})
export class UpdateCandidacyComponent implements OnInit {

  /*id!: number;
  candidacy!: Candidacy ;
  candidacyForm!: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,
    private candidacyService: CandidacyService , private formBuilder: FormBuilder) { }
 
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['idCandidacy'];
        this.candidacyService.getCandidacyId(this.id)
          .subscribe((candidacy: Candidacy) => {
            this.candidacy = this.candidacy;
            // pré-remplir les champs du formulaire avec les valeurs de la candidature
            this.candidacyForm = this.formBuilder.group({
              cv: [this.candidacy.cv],
              coverLetter: [this.candidacy.coverLetter],
              certificate: [this.candidacy.certificate],
              firstName: [this.candidacy.firstName],
              lastName: [this.candidacy.lastName],
              email: [this.candidacy.email],
              dateCandidacy: [this.candidacy.dateCandidacy],
              telephoneNumber: [this.candidacy.telephoneNumber],
              address: [this.candidacy.address],
              postalCode: [this.candidacy.postalCode],
              moyenneGenerale: [this.candidacy.moyenneGenerale],
              scoree: [this.candidacy.scoree],
              anneeExperience: [this.candidacy.anneeExperience],
              profil: [this.candidacy.profil],
              domainCandidacy: [this.candidacy.domainCandidacy],
              statusCandidacy: [this.candidacy.statusCandidacy],
              disponibilite: [this.candidacy.disponibilite]
            });
          });
      });
    }
  

  updateCandidacy() {
    this.candidacyService.updateCandidacy(this.id, this.candidacy)
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
    this.updateCandidacy();   

     
  }

  gotoList() {
    this.router.navigate(['/listcandidacy']);
  }*/

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

  /*onSubmit() {
    this.candidacyService.updateCandidacyStatus(this.idCandidacy)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/listcandidacy']);
      }, error => console.log(error));
  }*/

  /*onSubmit() {
    this.candidacyService.updateCandidatureStatus(this.idCandidacy)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/listcandidacy']);
      }, error => console.log(error));
  }*/

    onSubmit() {
    this.candidacyService.accepterOuRefuserCandidature(this.idCandidacy)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/listcandidacy']);
      }, error => console.log(error));
  }

 

}