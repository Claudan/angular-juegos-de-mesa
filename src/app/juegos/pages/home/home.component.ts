import { Component, OnInit } from '@angular/core';
import { faAws, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import {
  faGamepad,
  faPlus,
  faCode,
  faBars,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faGamepad = faGamepad;
  faPlus = faPlus;
  faCode = faCode;
  faAws = faAws;
  faGithubAlt = faGithubAlt;
  faBars = faBars;
  faSearch = faSearch;
  constructor() {}

  ngOnInit(): void {}
}
