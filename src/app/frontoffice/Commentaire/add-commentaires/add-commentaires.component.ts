import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/models/OfferModule/Commentaire.module';
import { CommentaireService } from '../../services/OfferServices/commentaire.service';



@Component({
  selector: 'app-add-commentaires',
  templateUrl: './add-commentaires.component.html',
  styleUrls: ['./add-commentaires.component.scss']
})
export class AddCommentairesComponent implements OnInit {

  commentaires: Commentaire = new Commentaire();
  submitted = false;

  constructor(private commentairesService: CommentaireService,
    private router: Router) { }

    map: any;

    ngOnInit() {
      
    }

  newEmployee(): void {
    this.submitted = false;
    this.commentaires = new Commentaire();
  }

  save() {
    this.commentairesService
      .createCommentaire(this.commentaires)
      .subscribe({
        next: data => {
          console.log(data);
          this.commentaires = new Commentaire();
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
        this.router.navigate(['/listCommentaires']);
      }
  }
  

  

