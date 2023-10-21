import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/models/OfferModule/Commentaire.module';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private BASE_URL = ' http://localhost:8088/espritmobility/api/commentaires/getCommentaires';
  private BASE_URL2 =' http://localhost:8088/espritmobility/api/commentaires/ajouterCommentaire';
  private BASE_URL3= "http://localhost:8060/InterMove/Events/delete"; 
  private BASE_URL4=" http://localhost:8088/espritmobility/api/offers/employees";
  private BASE_URL5="http://localhost:8088/espritmobility/api/commentaires";
  private BASE_URL6="http://localhost:8060/InterMove/Events"; 
  private BASE_URL7="http://localhost:8060/InterMove/Events/addEvent"; 
  private BASE_URL8 = 'http://localhost:8088/espritmobility/api/commentaires/delete';
  private BASE_URL9="http://localhost:8088/espritmobility/api/offers/export/excel";
  private apiUrl = 'http://localhost:8088/espritmobility/api/commentaires/commentaires/bad-words';

  constructor(private http: HttpClient) { }
  getCommentaires(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }
  deleteCommentaire(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL8}/${id}`, { responseType: 'text' });
  }
  createCommentaire(commentaires: Object): Observable<Object> {
    return this.http.post(`${this.BASE_URL2}`, commentaires);
  }

  updateCommentaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.BASE_URL5}/employees/${id}`, value);
  }
  getCommentaireId(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL5}/${id}`);
  }

  saveCommentaires(formData: FormData) {
    return this.http.post(`${this.BASE_URL7}`, formData);
  }
  getCommentaireById(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.BASE_URL6}/eventId/${id}`);
  }

  detecterBadWords(): Observable<boolean[]> {
    return this.http.get<boolean[]>(this.apiUrl);
  }
}
