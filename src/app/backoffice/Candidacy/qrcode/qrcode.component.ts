import { Component, OnInit } from '@angular/core';
import { QrcodeService } from '../../../frontoffice/services/Candidacy/QRCode/qrcode.service';
import { QrCode } from 'src/app/models/CandidacyModule/QRCode.module';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent  {

  qrCode!: QrCode;

  constructor(private qrCodeService: QrcodeService) {}

  onSubmit(link: string) {
    this.qrCodeService.createQRCode(link)
      .subscribe(qrCode => this.qrCode = qrCode);
  }
}
