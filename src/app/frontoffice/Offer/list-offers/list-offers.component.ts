import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OfferService } from '../../services/OfferServices/offer.service';


@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.scss']
})
export class ListOffersComponent implements OnInit {
  offers:any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  title: string;
 // offers: Offer[];
  constructor(private offerService: OfferService  ,private router: Router,private http: HttpClient){ }

  ngOnInit(): void {

    this.reloadData();

    
  }

  
  reloadData() {
    this.offers = this.offerService.getOffers().subscribe((res)=>{
      this.offers=res;
      console.log(res);
  
     });

  }
  onTableDataChange(Offer: any) {
    this.page = Offer;
    this.reloadData();
  }
  onTableSizeChange(Offer: any): void {
    this.tableSize = Offer.target.value;
    this.page = 1;
    this.reloadData();
  }
 /*  deleteEvent(id: number): void {
    this.eventsService.deleteEvent(id).subscribe({
      next: () => {
        console.log('Event deleted successfully');
      },
      error: error => console.error(error),
      complete: () => console.log('Delete request completed.')
    });

  } */
  deleteOffer = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce poste?')) {
      this.offerService.deleteOffer(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }
  updateOffer(id: number){
    this.router.navigate(['updateOffers', id]);
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




  searchOffer() {
    this.offerService.searchOffer(this.title)
      .subscribe(offers => {
        this.offers = offers;
      });
  }

}
