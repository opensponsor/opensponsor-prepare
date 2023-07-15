import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutsModule} from "@/app/layouts/layouts.module";

// import localeZhHans from '@angular/common/locales/zh-Hans';
// import localeEn from '@angular/common/locales/en';
// import {registerLocaleData} from "@angular/common";
// registerLocaleData(localeZhHans, localeEn);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
