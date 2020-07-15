import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { USER_ROLES } from 'src/app/constants';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {

  countries = COUNTRIES;
  ROLES = USER_ROLES;
  documents = [];
  constructor(
    private documentsService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.fetchDocuments();  
  }

  onDelete(document) {
    this.documentsService.deleteDocument(document).subscribe(response => {
      this.fetchDocuments();
    });
  }

  fetchDocuments() {
    this.documentsService.getAllDocuments().subscribe((response) => {
      const documents = response['data'];
      this.documents = documents;
    })
  }

  // downloadFile(url) {
  //   this.document
  // }
}
