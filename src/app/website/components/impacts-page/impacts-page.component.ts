import { Component, OnInit } from '@angular/core';
import { Information } from '../home-page/home-page.component';


const impacts: Information[] = [
  {
    imgUrl: '/assets/img/impect/imp01.jpg',
    title: '3226.50 Crore Launch of Plans',
    description: `On Wednesday, 06 March 2019, Chief Minister Nitish Kumar inaugurated various schemes worth Rs 271 crore at the convention building of Patna, inaugurated, inaugurated, laid foundation stones, and started work of seven different schemes worth Rs 2955.51 crore, totaling Rs 3226.50 crore.`,
  },
  {
    imgUrl: '/assets/img/impect/imp02.jpg',
    title: 'Foundation Stone of Saharsa Power Substation',
    description: `On Saturday, 19 January 2019, Chief Minister Nitish Kumar laid the foundation stone of the 400/220/132 KV power sub-station at Sinhaul in Satarkataiya block of Saharsa district at a cost of 300 crore.`,
  },
  {
    imgUrl: '/assets/img/impect/imp03.jpg',
    title: 'National Executive: Energy-rich JDU',
    description: `In an important meeting of the National Executive held in Delhi, JDU made its stand clear on many issues. The party was overwhelmed with new energy with a pledge addressed by the National President, Nitish Kumar. `,
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
