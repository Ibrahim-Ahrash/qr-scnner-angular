import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeService } from './qr-code-service.service';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
@NgModule({
  declarations: [
    AppComponent,
    QrscannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QrCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
