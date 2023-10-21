import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/frontoffice/services/OfferServices/offer.service';
import { Offer } from 'src/app/models/OfferModule/Offer.module';



@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers-back.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersBackComponent implements OnInit {

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
    this.router.navigate(['/listOffersBack']);
  }
  onFileSelected(offer: any) {
    const file = offer.target.files[0];
    this.offers.image = file.name;
  }

 }
  
