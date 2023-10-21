import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Offer } from 'src/app/models/OfferModule/Offer.module';
import { OfferService } from '../../services/OfferServices/offer.service';



@Component({
  selector: 'app-update-offers',
  templateUrl: './update-offers.component.html',
  styleUrls: ['./update-offers.component.scss']
})
export class UpdateOffersComponent implements OnInit {
  id!: number;
  offer!: Offer ;
  offerForm!: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,
    private offerService: OfferService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['idOffre'];
      this.offerService.getOfferId(this.id)
        .subscribe((offer: Offer) => {
          this.offer = offer;
          // pré-remplir les champs du formulaire avec les valeurs de l'événement
          this.offerForm = this.formBuilder.group({
            title: [this.offer.title],
            image: [this.offer.image],
            dateOffre: [this.offer.dateOffre],
            nbreCandidats: [this.offer.nbreCandidats],
            conditions: [this.offer.conditions],
            profil: [this.offer.profil],
            destination: [this.offer.destination],
            duration: [this.offer.duration],
            advantages: [this.offer.advantages],
          });
        });
    });
  }


updateOffer() {
  this.offerService.updateOffer(this.id, this.offer)
    .subscribe({
      next: data => {
        console.log(data);
        this.offer = new Offer();
        this.gotoList();
      },
      error: error => console.log(error)
    });
}


onSubmit() {
  this.updateOffer();   

   
}

gotoList() {
  this.router.navigate(['/listOffers']);
}


  

}




 
