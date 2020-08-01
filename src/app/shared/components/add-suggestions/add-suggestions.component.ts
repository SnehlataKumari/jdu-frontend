import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-suggestions',
  templateUrl: './add-suggestions.component.html',
  styleUrls: ['./add-suggestions.component.scss']
})
export class AddSuggestionsComponent implements OnInit {

  resourceUrl = '/scheme';
  schemes = [];

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetList();
  }

  async resetList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.schemes = list['data'];
  }

  async onAdd() {
    this.router.navigate(['admin','add-scheme']);
  }
  async delete(scheme) {
    await this.resourceService.delete(this.resourceUrl, scheme).toPromise();
    this.resetList();
  }

}
