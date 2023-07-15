import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "@/app/components/components.module";


@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  exports: [
    DefaultLayoutComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        NgOptimizedImage,
        ComponentsModule,
        RouterLink
    ]
})
export class LayoutsModule {
}
