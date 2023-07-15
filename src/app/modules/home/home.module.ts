import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from './index/index.component';
import {MatButtonModule} from "@angular/material/button";
import {ComponentsModule} from "@/app/components/components.module";
import {MatChipsModule} from "@angular/material/chips";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: '', component: IndexComponent,
  },
];

@NgModule({
  declarations: [
    IndexComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatButtonModule,
        ComponentsModule,
        MatChipsModule,
        FlexLayoutModule,
        MatCardModule,
    ]
})
export class HomeModule {
}
