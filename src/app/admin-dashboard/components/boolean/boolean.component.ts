import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent implements OnInit {

  @Input() isValue: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
