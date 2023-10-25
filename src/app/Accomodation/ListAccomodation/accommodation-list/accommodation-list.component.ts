import { Component, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/models/accommodation';
import { AccommodationService } from 'src/app/services/accommodation.service';


@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.css']
})
export class AccommodationListComponent implements OnInit {
  accommodations: any[] = [];

  constructor(private accommodationService: AccommodationService) { }


  ngOnInit(): void {
    this.getAccommodations();
    console.log(this.accommodations);
  }

  getAccommodations(): void {
    this.accommodationService.getAccommodations()
      .subscribe(data => this.accommodations = data
        
        
      );

  }

  deleteAccommodation(idAcc: any){
  
    this.accommodationService.deleteAccommodation(idAcc).subscribe(data => {
      console.log("supprimer avec sucees");
      this.getAccommodations;
    });
    window.location.reload();
  
  }

  getAccomodationById(idAcc:any){

    this.accommodationService.getAccommodationById(idAcc).subscribe(data => {
      console.log("details avec sucees");
      console.log(data);
      
    });
   
  }
}
