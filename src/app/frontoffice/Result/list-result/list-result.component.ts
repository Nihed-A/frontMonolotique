import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../../services/Candidacy/result.service';
import { ExcelService } from '../../services/Candidacy/excel.service';



@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  template: `<button (click)="exportToExcel()">Télécharger en Excel</button>`,
  styleUrls: ['./list-result.component.scss']
})
export class ListResultComponent implements OnInit {

  results:any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  
  constructor(private resultService: ResultService, private excelService: ExcelService ,private router: Router,private http: HttpClient){ }

  ngOnInit() {
    this.reloadData();
    
  }
  reloadData() {
    this.results = this.resultService.getResult().subscribe((res)=>{
      this.results=res;
      console.log(res);
  
     });

  }
   onTableDataChange(result: any) {
    this.page = result;
    this.reloadData();
  }
  onTableSizeChange(result: any): void {
    this.tableSize = result.target.value;
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
 deleteResult = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce poste?')) {
      this.resultService.deleteResult(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }
  
  updateResult(id: number){
    this.router.navigate(['editResult', id]);
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

  exportToExcel(): void {
    this.excelService.exportToExcel();
  }
}