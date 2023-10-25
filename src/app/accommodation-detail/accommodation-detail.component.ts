import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../services/accommodation.service';
import { Accommodation } from '../models/accommodation';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.css']
})
export class AccommodationDetailComponent implements OnInit {

  accommodation : Accommodation;

  constructor(
    private route: ActivatedRoute,
    private accommodationService: AccommodationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idAcc = params['id']; // Assuming your route includes a parameter named 'id'

      if (idAcc) {
        this.getAccommodationDetails(idAcc);
      }
    });
  }

  getAccommodationDetails(idAcc: any) {
    this.accommodationService.getAccommodationById(idAcc)
      .subscribe(
        (accommodation: Accommodation) => {
          this.accommodation = accommodation;
        },
        (error) => {
          console.error('Error fetching accommodation details: ', error);
        }
      );
  }
}


