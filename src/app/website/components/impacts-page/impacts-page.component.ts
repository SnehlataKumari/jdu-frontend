import { Component, OnInit } from '@angular/core';
import { Information } from '../home-page/home-page.component';


const impacts: Information[] = [
  {
    imgUrl: '/assets/img/impect/imp01.jpg',
    title: 'CRORE_LAUNCH',
    description: `ON_WEDNESDAY`,
  },
  {
    imgUrl: '/assets/img/impect/imp02.jpg',
    title: 'FOUNDATION_STONE',
    description: `ON_SATURDAY`,
  },
  {
    imgUrl: '/assets/img/impect/imp03.jpg',
    title: 'NATIONAL_EXECUTIVE',
    description: `IN_AN_IMPORTANT_MEETING`,
  },
];

@Component({
  selector: 'app-impacts-page',
  templateUrl: './impacts-page.component.html',
  styleUrls: ['./impacts-page.component.scss']
})
export class ImpactsPageComponent implements OnInit {

  impacts = impacts;
  constructor() { }

  ngOnInit(): void {
  }

}
