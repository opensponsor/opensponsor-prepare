import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend-dialog',
  templateUrl: './recommend-dialog.component.html',
  styleUrls: ['./recommend-dialog.component.scss']
})
export class RecommendDialogComponent {
  value =
      `OpenSponsor`;

  buttonLabel = '复制';

  copy() {
    this.buttonLabel = '已经复制';
    setTimeout(() => this.buttonLabel = '复制', 1000);
  }
}
