import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private http: HttpClient) {}

  exportToExcel(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, responseType: 'blob' as 'json' };

    this.http.get('http://localhost:8088/espritmobility/api/offers/export/excel', options)
      .subscribe((response: any) => {
        this.downloadFile(response);
      });
  }

  private downloadFile(response: any): void {
    const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'offers.xlsx';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}