import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RecommendDialogComponent} from "@/app/dialogs/recommend-dialog/recommend-dialog.component";

@Component({
  selector: 'app-recommend-we',
  templateUrl: './recommend-we.component.html',
  styleUrls: ['./recommend-we.component.scss']
})
export class RecommendWeComponent {
  constructor(public dialog: MatDialog) {
  }

  recommendWe() {
    this.dialog.open(RecommendDialogComponent, {
      width: "600px",
      maxWidth: "800px",
    })
  }
}
