import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  oldTop = 0;
  newTop = 0;
  stickyHeaderTop = 0;
  MainMenus = [
    {label: "参与进来", link: "/sponsor"},
    {label: "联系我", link: "/about"},
  ]

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > this.oldTop) {
      this.stickyHeaderTop = -window.scrollY;
      this.oldTop = window.scrollY;
    } else {
      this.stickyHeaderTop = 0;
      this.oldTop = window.scrollY;
    }
  }

  constructor() {
  }
}
