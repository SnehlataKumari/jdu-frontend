import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-brand-bihar-page',
  templateUrl: './brand-bihar-page.component.html',
  styleUrls: ['./brand-bihar-page.component.scss']
})
export class BrandBiharPageComponent implements OnInit {

  resourceUrl = '/brand-bihar';
  brandBiharList = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchBrandBiharList();
  }

  async fetchBrandBiharList() {
    const response = await this.apiService.get(this.resourceUrl).toPromise();
    const yatrayen = response['data'];
    this.brandBiharList = yatrayen;
  }

}
