import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend-dialog',
  templateUrl: './recommend-dialog.component.html',
  styleUrls: ['./recommend-dialog.component.scss']
})
export class RecommendDialogComponent {
  value =
      `Hi, 分享一个网站给你, 有空看一下.\n\n` +
      `OpenSponsor | 开放项目筹款平台\n` +
      `平台是一个筹款平台, 社区可以公开筹集资金, 和透明的使用资金.\n` +
      `平台旨在提供一个简单、透明的筹款平台\n` +
      `了解更多: https://opensponsor.cn\n`
  ;

  buttonLabel = '复制';

  copy() {
    this.buttonLabel = '已经复制';
    setTimeout(() => this.buttonLabel = '复制', 1000);
  }
}
