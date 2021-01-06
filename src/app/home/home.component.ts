import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public temaService: TemaService) {}

  isDarkMode: boolean = true;

  ngOnInit() {
    this.isDarkMode = this.temaService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.temaService.isDarkMode();

    this.isDarkMode
      ? this.temaService.update('light-mode')
      : this.temaService.update('dark-mode');
  }

}
