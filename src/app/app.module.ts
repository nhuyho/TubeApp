import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { VideoResultComponent } from './video-result/video-result.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TempConverterPipe } from './pipe/pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    VideoResultComponent,
    TempConverterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
