import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { S3Service } from 'src/app/services/s3.service';
import { Progress } from 'aws-sdk/lib/request';
import { filter } from 'lodash';
@Component({
  selector: 'app-create-video-form',
  templateUrl: './create-video-form.component.html',
  styleUrls: ['./create-video-form.component.scss']
})
export class CreateVideoFormComponent implements OnInit {

  isUploading = false;
  form: FormGroup;
  selectedPdfFile: File;
  selectedVideoFile: File;
  initialValues;
  @Input() error: string | null;

  filteredChapterList = [];
  filteredSubjectList = [];

  uploadProgress = {};

  filterOnKeys = {};

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private httpClient: HttpClient,
    private s3Service: S3Service,
    public dialogRef: MatDialogRef<CreateVideoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data.classList);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialValues = this.data.video;
    this.filteredChapterList = this.data.chapterList;
    this.filteredSubjectList = this.data.subjectList;

    this.form = this.fb.group({
      _id: [this.data.video._id],
      title: [this.data.video.title, Validators.required],
      description: [this.data.video.description, Validators.required],
      class: [this.data.video.class, Validators.required],
      chapter: [this.data.video.chapter, Validators.required],
      subject: [this.data.video.subject, Validators.required],
    });

    this.form.controls.class.valueChanges.subscribe((classId) => {
      this.filterOnKeys = {
        ...this.filterOnKeys,
        class: classId
      }
      this.setFilteredSubjectList({class: classId});
      this.setFilteredChapterList();
    });
    
    this.form.controls.subject.valueChanges.subscribe((subjectId) => {
      this.filterOnKeys = {
        ...this.filterOnKeys,
        subject: subjectId
      }
      this.setFilteredChapterList();
    });
  }

  setFilteredSubjectList(filterOptions) {
    this.filteredSubjectList = filter(this.data.subjectList, filterOptions);
  }

  setFilteredChapterList() {
    this.filteredChapterList = filter(this.data.chapterList, this.filterOnKeys);
  }

  onUploadClick(fileField) {
    fileField.click();
  }

  pdfFileChange(files) {
    this.selectedPdfFile = files[0];
  }

  videoFileChange(files) {
    this.selectedVideoFile = files[0];
  }

  onReset() {
    this.form.reset(this.initialValues);

    this.selectedVideoFile = undefined;
    this.selectedPdfFile = undefined;
  }

  async submit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      let response;
      const {
        _id, ...othr
      } = formValues;

      if (formValues._id == '' && (!this.selectedVideoFile || !this.selectedPdfFile)) {
        alert('Please upload video and pdf!');
        return;
      }

      this.isUploading = true;
      if (formValues._id == '') {
        
        const pdfS3 = await this.uploadOnS3(this.selectedPdfFile.name, this.selectedPdfFile);
        const videoS3 = await this.uploadOnS3(this.selectedVideoFile.name, this.selectedVideoFile);
        response = await this.api.post(this.data.resourceUrl, { ...othr, pdfS3, videoS3}).toPromise();
      } else {
        const url = `${this.data.resourceUrl}/${_id}`;
        let pdfS3;
        let videoS3;
        if (this.selectedPdfFile) {
          pdfS3 = await this.uploadOnS3(this.selectedPdfFile.name, this.selectedPdfFile);
        }

        if (this.selectedVideoFile) {
          videoS3 = await this.uploadOnS3(this.selectedVideoFile.name, this.selectedVideoFile);
        }
        response = await this.api.put(url, { ...othr, pdfS3, videoS3}).toPromise();
      }

      this.isUploading = false;
      this.dialogRef.close(response);
    }
  }

  async uploadOnS3(fileName, fileData) {
    const request = this.s3Service.uploadFile(fileName, fileData);
    request.on('httpUploadProgress', (progress: Progress) => {
      this.uploadProgress[fileName] = Math.round(100 * progress.loaded / progress.total);
    });

    return request.promise();
  }

}
