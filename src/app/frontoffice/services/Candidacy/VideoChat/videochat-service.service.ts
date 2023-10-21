import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideochatServiceService {

  private baseUrl = 'http://localhost:8088/espritmobility/api/candidacy/videochat2'; // URL de base de l'API

  constructor(private http: HttpClient) {}

  getVideochatPage(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
