import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from 'src/app/models/claim';
import { Respond } from 'src/app/models/respond';



@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(public httpClient: HttpClient) {}

  getClaims():Observable<Claim[]>{
    return this.httpClient.get<Claim[]>(`http://localhost:8084/api/Claim/myClaims`);
  }

  getAllClaims():Observable<Claim[]>{
    return this.httpClient.get<Claim[]>(`http://localhost:8084/api/Claim/allClaims`);
  }

  createAlert(claim:Claim): Observable<Object> {
    return this.httpClient.post(`http://localhost:8084/api/Claim/creat`, claim);
  }

 archiveClail(id: number): Observable<Object> {
  return this.httpClient.put(`http://localhost:8084/api/Claim/${id}`, id);
 }

 respondToClaim(id: number, response:Respond): Observable<Object> {
  return this.httpClient.post(`http://localhost:8084/api/Claim/responseclaim/${id}`,response);
 }

//  getAllResponses():Observable<Respond[]>{
//   return this.httpClient.get<Claim[]>(`http://localhost:8088/espritmobility/api/Claim/allClaims`);
// }
delete(id:any)
{
  return this.httpClient.delete(`http://localhost:8084/api/Claim/delete/${id}`)
}

 

}
