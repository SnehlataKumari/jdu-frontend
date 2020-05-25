import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-resource-form',
  templateUrl: './update-resource-form.component.html',
  styleUrls: ['./update-resource-form.component.scss']
})
export class UpdateResourceFormComponent implements OnInit {

  form: FormGroup;
  @Input() error: string | null;
  @Input() resource;
  @Output() onUpdate = new EventEmitter();
  initialValues = {
    name: '',
    _id: ''
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [this.resource.name, Validators.required],
      _id: [this.resource._id, Validators.required],
    });

    this.initialValues = {
      name: this.resource.name,
      _id: this.resource._id
    }
  }

  submit() {
    if (this.form.valid) {
      this.onUpdate.emit(this.form.value);
    }
  }
 

}
