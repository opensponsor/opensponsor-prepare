import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RecommendDialogComponent } from './recommend-dialog/recommend-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {ClipboardModule} from "@angular/cdk/clipboard";


@NgModule({
  declarations: [
    RecommendDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ClipboardModule
  ]
})
export class DialogsModule {
}
