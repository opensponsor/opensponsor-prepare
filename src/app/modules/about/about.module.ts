import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from './index/index.component';
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: '', component: IndexComponent,
  },
];

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule
  ]
})
export class AboutModule {
}
