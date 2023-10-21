import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Commentaire } from 'src/app/models/OfferModule/Commentaire.module';
import { CommentaireService } from '../../services/OfferServices/commentaire.service';


@Component({
  selector: 'app-update-commentaires',
  templateUrl: './update-commentaires.component.html',
  styleUrls: ['./update-commentaires.component.scss']
})
export class UpdateCommentairesComponent implements OnInit {
  id!: number;
  commentaire!: Commentaire ;
  commentaireForm!: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,
    private commentaireService: CommentaireService , private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['idComment'];
      this.commentaireService.getCommentaireId(this.id)
        .subscribe((commentaire: Commentaire) => {
          this.commentaire = commentaire;
          // pré-remplir les champs du formulaire avec les valeurs de l'événement
          this.commentaireForm = this.formBuilder.group({
            description: [this.commentaire.description],
            creationDate: [this.commentaire.creationDate],
            
          });
        });
    });
  }


updateCommentaire() {
  this.commentaireService.updateCommentaire(this.id, this.commentaire)
    .subscribe({
      next: data => {
        console.log(data);
        this.commentaire = new Commentaire();
        this.gotoList();
      },
      error: error => console.log(error)
    });
}


onSubmit() {
  this.updateCommentaire();   

   
}

gotoList() {
  this.router.navigate(['/listCommentaires']);
}

}
