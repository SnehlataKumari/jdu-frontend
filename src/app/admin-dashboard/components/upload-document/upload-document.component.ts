import { Component, OnInit } from '@angular/core';
import { getKeys, USER_ROLES } from 'src/app/constants';
import { DocumentsService } from 'src/app/services/documents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  uploadedInfo;
  roles;
  constructor(
    private documentsService: DocumentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.roles = getKeys(USER_ROLES);
  }

  onSubmit(uploadForm) {

    if(!this.uploadedInfo) {
      alert('Please upload file before sending');
      return;
    }

    const roles = Reflect.ownKeys(uploadForm.value).filter(key => !!uploadForm.value[key]);
    this.documentsService.create({
      ...this.uploadedInfo,
      roles
    }).subscribe(() => {
      this.router.navigate(['dashboard', 'documents']);
    })
    
  }

  onUploadSuccess(uploadedInfo) {
    this.uploadedInfo = uploadedInfo;
  }

}
