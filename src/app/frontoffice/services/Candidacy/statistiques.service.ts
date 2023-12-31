import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  private apiUrl = 'http://localhost:8088/espritmobility/api/candidacy/statistiques';

  constructor(private http: HttpClient) {}

  getNombreCandidaturesParDomaine(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}