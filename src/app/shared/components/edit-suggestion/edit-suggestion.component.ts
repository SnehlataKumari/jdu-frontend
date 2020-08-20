import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-suggestion',
  templateUrl: './edit-suggestion.component.html',
  styleUrls: ['./edit-suggestion.component.scss']
})
export class EditSuggestionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<EditSuggestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.data.scheme.title || '', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async submit() {
    const url = `/scheme/${this.data.scheme._id}`;
    const response = await this.api.put(url, this.form.value).toPromise();
    this.dialogRef.close(response);
  }

}
