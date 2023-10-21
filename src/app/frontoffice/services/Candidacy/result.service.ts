import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/models/CandidacyModule/Result.module';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private baseUrl = 'http://localhost:8088/espritmobility/api/result';

  private BASE_URL = 'http://localhost:8088/espritmobility/api/result/getResult';
  private BASE_URL2 = 'http://localhost:8088/espritmobility/api/result';
  private BASE_URL3= "http://localhost:8088/espritmobility/api/result/delete"; 
  private BASE_URL4="http://localhost:8088/espritmobility/api/candidacy/update";
  private BASE_URL5='http://localhost:8088/espritmobility/api/candidacy/candidacyId';
  private BASE_URL6="http://localhost:8088/espritmobility/api/result"; 
  private BASE_URL7="http://localhost:8088/espritmobility/api/candidacy/addResult"; 
  private BASE_URL8='http://localhost:8088/espritmobility/api/result/employees';



  constructor(private http: HttpClient) { }

  getResult(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

deleteResult(id: number): Observable<any> {
  return this.http.delete(`${this.BASE_URL3}/${id}`, { responseType: 'text' });
}
createResult(result: Object): Observable<Object> {
  return this.http.post(`${this.BASE_URL2}`, result);
}


getResultId(id: number): Observable<any> {
  return this.http.get(`${this.BASE_URL6}/${id}`);
}


saveResult(formData: FormData) {
  return this.http.post(`${this.BASE_URL7}`, formData);
}
getResultById(id: number): Observable<Result> { 
  return this.http.get<Result>(`${this.BASE_URL5}/${id}`);
}


updateResult(id: number, result: Result): Observable<Result> {
  return this.http.put<Result>(`${this.baseUrl}/${id}`, result);
}



}