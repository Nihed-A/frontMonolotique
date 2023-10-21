import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(public httpClient: HttpClient) { }
  
  getQRCodeImage(): Observable<Blob> {
    const url = 'http://localhost:8088/espritmobility/api/Claim/qr/generate'; // Replace with your actual API endpoint URL
    return this.httpClient.get(url, { responseType: 'blob' });
  }

  // createQR(email:string): Observable<Object> {
    
  //   return this.httpClient.post(`http://localhost:8088/espritmobility/api/Claim/qr/generate`,email, { responseType: 'blob' }).subscribe((imageData: Blob) => {
  //     const objectUrl = URL.createObjectURL(imageData);
  //     this.qrCodeImage = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
  //   });
  // }

  getImageData(imageRequest: string): Observable<any> {
    const url = 'http://localhost:8088/espritmobility/api/Claim/qr/generate';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, responseType: 'blob' as 'json' };
    // return this.httpClient.post(`http://localhost:8088/espritmobility/api/Claim/qr/generate`, imageRequest, { responseType: 'blob' });
    return this.httpClient.post<Blob>(url, imageRequest, options);
  }

}
