import { Component, OnInit } from '@angular/core';

import { AccomodationService } from '../services/accomodation.service';
import { Accomodation } from 'src/app/owner/models/Accomodation';

@Component({
  selector: 'app-add-accomodation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.css']
})
export class AddAccomodationComponent implements OnInit {

  accomodation=new Accomodation()

  constructor(private accomodationService:AccomodationService) { }

  ngOnInit(): void {
  }

  addAccomodation(){
    this.accomodationService.addAccomodation(this.accomodation).subscribe(data=>{
     console.log('data',this.accomodation);
   },
     error=>console.log('erreur')
     )
 }

}