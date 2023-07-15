import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import { RecommendWeComponent } from './recommend-we/recommend-we.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogsModule} from "@/app/dialogs/dialogs.module";


@NgModule({
  declarations: [
    FooterComponent,
    LogoComponent,
    RecommendWeComponent
  ],
  exports: [
    FooterComponent,
    LogoComponent,
    RecommendWeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    DialogsModule,
  ]
})
export class ComponentsModule {
}
