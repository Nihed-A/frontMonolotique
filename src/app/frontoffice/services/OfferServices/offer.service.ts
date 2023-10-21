import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/models/OfferModule/Offer.module';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private BASE_URL = 'http://localhost:8088/espritmobility/api/offers/getOffers';
  private BASE_URL2 ='http://localhost:8088/espritmobility/api/offers/createOffer';
  private BASE_URL3= "http://localhost:8060/InterMove/Events/delete"; 
  private BASE_URL4=" http://localhost:8088/espritmobility/api/offers/employees";
  private BASE_URL5="http://localhost:8088/espritmobility/api/offers";
  private BASE_URL6="http://localhost:8060/InterMove/Events"; 
  private BASE_URL7="http://localhost:8060/InterMove/Events/addEvent"; 
  private BASE_URL8 = 'http://localhost:8088/espritmobility/api/offers/delete';
  private BASE_URL9="http://localhost:8088/espritmobility/api/offers/export/excel";
  private apiUrl = 'http://localhost:8088/espritmobility/api/offers/pdf';

  constructor(private http: HttpClient) { }
  getOffers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

  getOffers1(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.BASE_URL9);
  }

deleteOffer(id: number): Observable<any> {
  return this.http.delete(`${this.BASE_URL8}/${id}`, { responseType: 'text' });
}
createOffer(offers: Object): Observable<Object> {
  return this.http.post(`${this.BASE_URL2}`, offers);
}

/*updateOffer(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.BASE_URL4}/${id}`, value);
}*/

updateOffer(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.BASE_URL5}/employees/${id}`, value);
}
getOfferId(id: number): Observable<any> {
  return this.http.get(`${this.BASE_URL5}/${id}`);
}

/*affecterUserToOffer(id: number, idE: number): Observable<any> {
  return this.http.post(`${this.BASE_URL6}/affecter-user-event/${id}/${idE}`, {});
}
RemoveUserToOffer(id: number, idE: number): Observable<any> {
  return this.http.delete(`${this.BASE_URL6}/remove-user-event/${id}/${idE}`, {});
}
*/
saveOffers(formData: FormData) {
  return this.http.post(`${this.BASE_URL7}`, formData);
}
getOfferById(id: number): Observable<Offer> {
  return this.http.get<Offer>(`${this.BASE_URL6}/eventId/${id}`);
}
searchOffer(title: string): Observable<Offer[]> {
  const url = `${this.BASE_URL5}/search?title=${title}`;
  return this.http.get<Offer[]>(url);
}

generatePDF(): Observable<Blob> {
  return this.http.get(this.apiUrl, {
    responseType: 'blob'
  });
}
}
