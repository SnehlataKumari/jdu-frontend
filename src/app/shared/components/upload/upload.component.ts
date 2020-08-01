import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file;
  done=false;
  @Output() onUploadSuccess = new EventEmitter();
  constructor(
    public documentsService: DocumentsService
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.documentsService.uploadFile(formData).subscribe((response) => {
      this.file = null;
      if(response) {
        this.done = true;
      }
      this.onUploadSuccess.emit(response);
    })
  }

}
