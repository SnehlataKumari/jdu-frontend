import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-resource-form',
  templateUrl: './create-resource-form.component.html',
  styleUrls: ['./create-resource-form.component.scss']
})
export class CreateResourceFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
  @Input() error: string | null;
  @Output() onSubmit = new EventEmitter();

}
