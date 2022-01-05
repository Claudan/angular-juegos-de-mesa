import { Component, HostListener, OnInit } from '@angular/core';
import {
  faAws,
  faGithubAlt,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGamepad,
  faPlus,
  faCode,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faGamepad: IconDefinition = faGamepad;
  faPlus: IconDefinition = faPlus;
  faCode: IconDefinition = faCode;
  faAws: IconDefinition = faAws;
  faGithubAlt: IconDefinition = faGithubAlt;
  faBars: IconDefinition = faBars;
  isSidebarOpen: boolean = true;

  constructor() {}

  closeSidebarByWidth(width: number) {
    if (width < 840) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  ngOnInit(): void {
    this.closeSidebarByWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const window = event.target as Window;
    this.closeSidebarByWidth(window.innerWidth);
  }

  burguer() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
