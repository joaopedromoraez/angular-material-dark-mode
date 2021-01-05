import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private temaService: TemaService) { }

  ngOnInit(){
    this.temaService.initTheme();
  }

}
