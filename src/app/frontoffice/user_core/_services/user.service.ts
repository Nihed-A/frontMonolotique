import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8088/espritmobility/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

    getUsers(): Observable<any>
    { return this.http.get(API_URL + 'users'); }

    getUser(id: any): Observable<any>
    { return this.http.get(API_URL + 'user/' + id); }

    editUser(idUser: any, user: any): Observable<any>
    { return this.http.put(API_URL + 'updateUser/' + idUser, {user}); }

    editEmail(username: any, email: any): Observable<any>
      {return this.http.put(API_URL + 'modify-email/'+username +'/'+ email, {});}

    getImage(idImage: any): Observable<any>
    { return this.http.get('http://localhost:8088/espritmobility/files/' + idImage); }

    activateUser(id: any): Observable<any>
    { return this.http.put(API_URL +'Activate/' + id, {}); }


}
