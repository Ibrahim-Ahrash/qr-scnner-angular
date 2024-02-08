import { Injectable } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  private codeReader: BrowserMultiFormatReader;

  constructor() {
    this.codeReader = new BrowserMultiFormatReader();
  }

  async decodeFromVideoElement(videoElement: HTMLVideoElement): Promise<string> {
    const constraints = { video: { facingMode: 'environment' } };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    videoElement.srcObject = stream;

    return new Promise<string>((resolve, reject) => {
      this.codeReader.decodeFromVideoDevice(null, videoElement, (result, error) => {
        if (result) {
          resolve(result.getText());
        } else if (error) {
          // reject(error);
        }
      });
    });
  }
}
