import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared';
import { RoutesModule } from './routes/routes.module';
import { BjdgRangeTimeModule } from './routes/bjdg-range-time/bjdg-range-time.module';
import { BjdgCustomLineModule } from './routes/bjdg-custom-line/bjdg-custom-line.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    RoutesModule,
    BjdgRangeTimeModule,
    BjdgCustomLineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
