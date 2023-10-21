import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  private apiUrl = 'http://localhost:8088/espritmobility/api/offers/statistiques';

  constructor(private http: HttpClient) {}

  getNombreOffresParDestination(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}