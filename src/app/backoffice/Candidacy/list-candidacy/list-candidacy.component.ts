import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Candidacy } from 'src/app/models/CandidacyModule/Candidacy.module';
import { CandidacyService } from 'src/app/frontoffice/services/Candidacy/candidacy.service';


@Component({
  selector: 'app-list-candidacy',
  templateUrl: './list-candidacy.component.html',
  styleUrls: ['./list-candidacy.component.scss']
})
export class ListCandidacyComponent implements OnInit {
  idCandidacy: number;
  candidacy: any;
  candidacies:any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  firstName: string;
  candidacies1: Candidacy[];
 

  constructor(private candidacyService: CandidacyService  ,private router: Router,private http: HttpClient){ }

  ngOnInit() {
    this.reloadData();
    
  }
  reloadData() {
    this.candidacies = this.candidacyService.getCandidacy().subscribe((res)=>{
      this.candidacies=res;
      console.log(res);
  
     });

  }
   onTableDataChange(candidacy: any) {
    this.page = candidacy;
    this.reloadData();
  }
  onTableSizeChange(candidacy: any): void {
    this.tableSize = candidacy.target.value;
    this.page = 1;
    this.reloadData();
  } 
 /*  deleteCandidacy(id: number): void {
    this.candidacyService.deleteCandidacy(id).subscribe({
      next: () => {
        console.log('Candidacy deleted successfully');
      },
      error: error => console.error(error),
      complete: () => console.log('Delete request completed.')
    });

  } */
 deleteCandidacy = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce poste?')) {
      this.candidacyService.deleteCandidacy(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }
  
  updateCandidacyStatus(id: number){
    this.router.navigate(['update2', id]);
  } 

  
  /* eventId!: number;
  affecterUserToEvent(id: number , eventId : number) {
    const url = `/affecter-user-event/${id}/${this.eventId}`;
    this.http.post(url, {}).subscribe(
      () => {
        console.log('Utilisateur affecté à l\'événement');
      },
      (error) => {
        console.log('Erreur lors de l\'affectation de l\'utilisateur à l\'événement :', error);
      }
    );
  } */
  private downloadFile(data: Blob, filename: string) {
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  }

 

 

  searchCandidacy() {
    this.candidacyService.searchCandidacy(this.firstName)
      .subscribe(candidacies1 => {
        this.candidacies = candidacies1;
      });
  }

  openVideoChat() {
    // Générer le lien de la vidéo chat
    const link = 'https://meet.jit.si/%7BrandomRoomId%7D';
    
    // Ouvrir le lien dans une nouvelle fenêtre
    window.open(link);
  }
  generatePDF(): void {
    this.candidacyService.generatePDF().subscribe(
      (response: Blob) => {
        this.downloadPDF(response, 'candidacy.pdf');
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la génération du PDF :', error);
      }
    );
  }
  
  private downloadPDF(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

}