import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public httpClient: HttpClient) { }

 // public baseUrl="http://localhost:8088/espritmobility/api/alert/alerts";
  
  getAlerts():Observable<Alert[]>{
    return this.httpClient.get<Alert[]>(`http://localhost:8088/espritmobility/api/alert/myalerts`);
  }

  createAlert(alert:Alert): Observable<Object> {
    return this.httpClient.post(`http://localhost:8088/espritmobility/api/alert`, alert);
  }

  deleteAlert(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:8088/espritmobility/api/alert/delete/${id}`);
  }

}
