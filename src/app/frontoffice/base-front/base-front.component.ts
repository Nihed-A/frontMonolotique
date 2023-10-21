import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service';
@Component({
  selector: 'app-base-front',
  templateUrl: './base-front.component.html',
  styles: [
  ]
})
export class BaseFrontComponent implements OnInit {
  email:string;
  qrCodeImage: Blob;
  constructor(private sanitizer: DomSanitizer, private alertService: AlertService, private http: HttpClient) { }
  ngOnInit(): void {
    //this.generateQRCodeImage(this.email);
  }

  url = 'http://localhost:8088/espritmobility/api/Claim/qr/generate';
  imageData: string;
 onSubmit() {
    // Replace with your actual Spring Boot API endpoint
    // this.http.post(this.url, this.email, { responseType: 'blob' }).subscribe((imageData: Blob) => {
    //   console.log("we are inside");
    //   const objectUrl = URL.createObjectURL(imageData);
    //   this.qrCodeImage = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    //   console.log(this.qrCodeImage);
    // });

    // this.alertService.getImageData(this.email).subscribe((response: Blob) => {
    //   console.log("we are inside");
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     this.imageData = reader.result as string;
    //   };
    //   reader.readAsDataURL(response);
    // });

 }

//  generateQR(){
//    this.alertService.createQR(this.email).subscribe(email => {
//      console.log(email);
//    },
//    error => {
//      console.log(error);
//    });
//  }



  // generateQRCodeImage(data: string): void {
  //   const url = 'http://localhost:8088/espritmobility/api/Claim/qr/generate'; // Replace with your actual Spring Boot API endpoint
  //   this.http.post(url, data, { responseType: 'blob' }).subscribe((imageData: Blob) => {
  //     const objectUrl = URL.createObjectURL(imageData);
  //     this.qrCodeImage = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
  //   });
  // }

}
