import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lang-selection',
  templateUrl: './lang-selection.html',
  styleUrls: ['./lang-selection.component.scss']
})
export class LangSelectionComponent implements OnInit {

  resourceUrl = '/scheme';
  schemes = [];

  constructor(
    public translate: TranslateService,
  ) { 
    translate.addLangs(['en', 'hi'])
    translate.setDefaultLang('en')
  }

  ngOnInit(): void {
  }



}
