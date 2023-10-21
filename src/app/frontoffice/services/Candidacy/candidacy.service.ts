import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidacy } from 'src/app/models/CandidacyModule/Candidacy.module';



@Injectable({
  providedIn: 'root'
})
export class CandidacyService {

  private baseUrl = 'http://localhost:8088/espritmobility/api/candidacy';

  private BASE_URL = 'http://localhost:8088/espritmobility/api/candidacy/getCandidacy1';
  private BASE_URL2 = 'http://localhost:8088/espritmobility/api/candidacy/create';
  private BASE_URL1 = 'http://localhost:8088/espritmobility/api/candidacy/candidature';
  private BASE_URL3= "http://localhost:8088/espritmobility/api/candidacy/delete"; 
  private BASE_URL4="http://localhost:8088/espritmobility/api/candidacy/update2";
  private BASE_URL5='http://localhost:8088/espritmobility/api/candidacy/modifier';
  private BASE_URL6="http://localhost:8088/espritmobility/api/candidacy/update1"; 
  private BASE_URL7="http://localhost:8088/espritmobility/api/candidacy/put"; 
  private BASE_URL8='http://localhost:8088/espritmobility/api/candidacy/update/status';
  private apiUrl = 'http://localhost:8088/espritmobility/api/candidacy/pdf';



  constructor(private http: HttpClient) { }

  getCandidacy(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

deleteCandidacy(id: number): Observable<any> {
  return this.http.delete(`${this.BASE_URL3}/${id}`, { responseType: 'text' });
}
createCandidacy(candidacy: Object): Observable<Object> {
  return this.http.post(`${this.BASE_URL2}`, candidacy);
}

/*createCandidacy(candidacy: Object): Observable<Object> {
  return this.http.post(`${this.BASE_URL1}`, candidacy);
}*/

updateCandidacy(id:number, candidacy: Candidacy): Observable<Object> {
  return this.http.put(`${this.BASE_URL8}/${id}`, Candidacy);
}
getCandidacyById(id: number): Observable<Candidacy> { 
  return this.http.get<Candidacy>(`${this.BASE_URL5}/${id}`);
}



  updateCandidacyStatus(idCandidacy: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/status/${idCandidacy}`, {});
  }

  updateCandidatureStatus(idCandidacy: number): Observable<any> {
    return this.http.put(`${this.BASE_URL7}/${idCandidacy}`, {});
  }
  accepterOuRefuserCandidature(idCandidacy: number): Observable<any> {
    return this.http.put(`${this.BASE_URL6}/${idCandidacy}`, {});
  }

  searchCandidacy(firstName: string): Observable<Candidacy[]> {
    const url = `${this.baseUrl}/search?firstName=${firstName}`;
    return this.http.get<Candidacy[]>(url);
  }
  
  generatePDF(): Observable<Blob> {
    return this.http.get(this.apiUrl, {
      responseType: 'blob'
    });
  }

}
  
  
  
