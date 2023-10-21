import { Component} from '@angular/core';
import { QrcodeService } from '../services/OfferServices/qrcode.service';
import { QrCode } from 'src/app/models/OfferModule/qrcode.module';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent {
  qrCode!: QrCode;

  constructor(private qrCodeService: QrcodeService) {}

  onSubmit(link: string) {
    this.qrCodeService.createQRCode(link)
      .subscribe(qrCode => this.qrCode = qrCode);
  }
}
