import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/OfferModule/Offer.module';
import { OfferService } from '../../services/OfferServices/offer.service';



@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent implements OnInit {

  offers: Offer = new Offer();
  submitted = false;

  constructor(private offersService: OfferService,
    private router: Router) { }

    map: any;

    ngOnInit() {
      
    }

  newEmployee(): void {
    this.submitted = false;
    this.offers = new Offer();
  }

  save() {
    this.offersService
      .createOffer(this.offers)
      .subscribe({
        next: data => {
          console.log(data);
          this.offers = new Offer();
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
    this.router.navigate(['/listOffers']);
  }
  onFileSelected(offer: any) {
    const file = offer.target.files[0];
    this.offers.image = file.name;
  }

 }
  
