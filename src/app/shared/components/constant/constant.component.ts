import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.scss']
})
export class ConstantComponent implements OnInit {

  @Input() constant;
  @Input() code;
  @Input() isBadge = true;
  label;
  constructor() { }

  ngOnInit(): void {
    this.label = this.constant[this.code].label;
  }

}
