import { Component } from '@angular/core';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tessst';
  handleQrCodeScanned(qrCodeData: string): void {
    // Do something with the scanned QR code data
    console.log('Scanned QR code:', qrCodeData);
  }
}
