import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommentaireService } from 'src/app/frontoffice/services/OfferServices/commentaire.service';


@Component({
  selector: 'app-list-commentaires',
  templateUrl: './list-commentaires-back.component.html',
  styleUrls: ['./list-commentaires.component.scss']
})
export class ListCommentairesBackComponent implements OnInit {
  badWordsDetected: boolean[];

  commentaires:any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private commentaireService: CommentaireService  ,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.reloadData();
    this.detecterBadWords();

  }

  reloadData() {
    this.commentaires = this.commentaireService.getCommentaires().subscribe((res)=>{
      this.commentaires=res;
      console.log(res);
  
     });

  }
  onTableDataChange(Commentaire: any) {
    this.page = Commentaire;
    this.reloadData();
  }
  onTableSizeChange(Commentaire: any): void {
    this.tableSize = Commentaire.target.value;
    this.page = 1;
    this.reloadData();
  }

  deleteCommentaire = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce poste?')) {
      this.commentaireService.deleteCommentaire(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }
  updateCommentaire(id: number){
    this.router.navigate(['updateCommentaires', id]);
  }
  
  
  detecterBadWords(): void {
    this.commentaireService.detecterBadWords().subscribe(
      (badWordsDetected: boolean[]) => {
        this.badWordsDetected = badWordsDetected;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des commentaires :', error);
      }
    );
  }
}
