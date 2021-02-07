import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  JwPaginationComponent,
  JwPaginationModule,
} from 'jw-angular-pagination';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    JwPaginationModule,
  ],
  declarations: [AppComponent, JwPaginationComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
