import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QrCode } from 'src/app/models/CandidacyModule/QRCode.module';



@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private baseUrl = ' http://localhost:8088/espritmobility/api/candidacy/ajouterQR'; // Change this to match your API endpoint
  private baseUrl1 = 'http://localhost:8088/espritmobility/api/candidacy/afficher';
  
  constructor(private http: HttpClient) { }

  createQRCode(link: string): Observable<QrCode> {
    return this.http.post<QrCode>(`${this.baseUrl}`, link);
  }

  getQRCodeImage(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl1}/${id}`, { responseType: 'blob' });
  }
}
