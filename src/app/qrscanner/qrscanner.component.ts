import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { QrCodeService } from '../qr-code-service.service';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.scss']
})
export class QrscannerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  @Output() qrCodeScanned: EventEmitter<string> = new EventEmitter<string>();
  scannedCode: string | null = null;

  constructor(
    private qrCodeService: QrCodeService
  ) {

  }
  ngAfterViewInit(): void {
    this.startScanning();
  }

  ngOnInit(): void {
    this.startScanning();
  }

  async startScanning(): Promise<void> {
    try {
      const result = await this.qrCodeService.decodeFromVideoElement(this.videoElement.nativeElement);
      this.scannedCode = result;
      this.qrCodeScanned.emit(result); // Emit the scanned QR code data
    } catch (error) {
      console.error('QR code scanning error:', error);
    }
  }


}
