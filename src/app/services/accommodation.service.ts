import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accommodation } from '../models/accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  private apiURL = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(`${this.apiURL}/Accomodations`);
  }

  getAccommodationById(idAcc: string): Observable<Accommodation> {
    return this.http.get<Accommodation>(`${this.apiURL}/Accomodations/${idAcc}`);
  }

  createAccommodation(accommodation: Accommodation): Observable<Accommodation> {
    return this.http.post<Accommodation>(`${this.apiURL}/Accomodations`, accommodation);
  }

  updateAccommodation(idAcc: string, accommodation: Accommodation): Observable<Accommodation> {
    return this.http.put<Accommodation>(`${this.apiURL}/Accomodations/${idAcc}`, accommodation);
  }

  deleteAccommodation(idAcc: any): Observable<Accommodation> {
    return this.http.delete<Accommodation>(`${this.apiURL}/Accomodations/${idAcc}`);
  }
}
