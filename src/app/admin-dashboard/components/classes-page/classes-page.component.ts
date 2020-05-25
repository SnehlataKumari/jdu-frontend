import { Component, OnInit } from '@angular/core';

interface ColumnConfig {
  columnName: string,
  title: string,
}
@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})
export class ClassesPageComponent implements OnInit {

  columnConfig: ColumnConfig[] = [
    {columnName: '_id', title: 'Id'},
    {columnName: 'name', title: 'Name'},
    {columnName: 'createdAt', title: 'Created on'},
    {columnName: 'updatedAt', title: 'Updated On'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
