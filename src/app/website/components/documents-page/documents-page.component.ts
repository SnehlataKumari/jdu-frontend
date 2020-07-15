import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {

  documents = [];
  constructor(
    private documentsService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.documentsService.getUsersDocuments().subscribe(response => {
      this.documents = response['data'];
    })
  }



}
