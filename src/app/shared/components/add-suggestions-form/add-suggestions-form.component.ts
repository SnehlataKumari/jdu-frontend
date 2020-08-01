import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-suggestions-form',
  templateUrl: './add-suggestions-form.component.html',
  styleUrls: ['./add-suggestions-form.component.scss']
})
export class AddSuggestionsFormComponent implements OnInit {
  resourceUrl = '/scheme';
  schemes = [];
  form: FormGroup;

  constructor(
    private resourceService: ResourceService,
    private api: ApiService,
    private fb: FormBuilder,
    private alert: AlertService

  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      scheme: ['', Validators.required]
    });

  }

  async onSubmit() {
    const value = this.form.value;
    await this.api.post('/scheme', {title: value.scheme}).toPromise();
    this.alert.success('Scheme Created Successfully!');
  }

}
