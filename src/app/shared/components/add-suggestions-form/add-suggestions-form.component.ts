import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-suggestions-form',
  templateUrl: './add-suggestions-form.component.html',
  styleUrls: ['./add-suggestions-form.component.scss']
})
export class AddSuggestionsFormComponent implements OnInit {
  resourceUrl = '/scheme';
  schemes = [];
  constructor(
    private resourceService: ResourceService,
    private api: ApiService,
  ) { }


  ngOnInit(): void {
    this.resetList();
  }
  async resetList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.schemes = list['data'];
  }

  async onSubmit(scheme) {
    await this.api.post('/schemes', {title: scheme})
    this.resetList();
  }

}
