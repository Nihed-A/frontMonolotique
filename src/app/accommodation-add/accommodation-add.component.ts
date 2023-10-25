import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../models/accommodation';
import { AccommodationService } from '../services/accommodation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommodation-add',
  templateUrl: './accommodation-add.component.html',
  styleUrls: ['./accommodation-add.component.css']
})
export class AccommodationAddComponent  {

  newAccommodation: Accommodation = new Accommodation();
  // Define a variable to track if the form has been submitted
  formSubmitted = false;

  constructor(
    private accommodationService: AccommodationService,
    private router: Router
  ) {}

  onSubmit() {
    // Set the formSubmitted flag to true
    this.formSubmitted = true;

    // Check if the form is valid before submitting
    if (this.isFormValid()) {
      this.accommodationService.createAccommodation(this.newAccommodation)
        .subscribe((accommodation) => {
          // Handle the response, e.g., show a success message or redirect
          console.log('Accommodation added:', accommodation);
          // Reset the form and navigate to a different route (e.g., a list of accommodations)
          this.resetForm();
          this.router.navigate(['/Accommodations']);
        });
    }
  }

  // Function to check if the form is valid
  isFormValid(): boolean {
    // You can add validation logic here, for example, check if required fields are filled.
    // Return true if the form is valid, or false otherwise.
    // For simplicity, we'll assume the form is always valid.
    return true;
  }

  // Function to reset the form
  resetForm() {
    this.newAccommodation = new Accommodation();
    // Reset the formSubmitted flag
    this.formSubmitted = false;
  }
}