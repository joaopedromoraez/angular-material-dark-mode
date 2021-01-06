import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/services/tema.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private temaService: TemaService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    ) {
      iconRegistry.addSvgIcon(
        'github-circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/github-circle.svg'));
    }

  ngOnInit(){
    this.temaService.initTheme();
  }

}
