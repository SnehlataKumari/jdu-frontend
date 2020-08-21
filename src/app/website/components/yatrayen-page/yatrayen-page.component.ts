import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-yatrayen-page',
  templateUrl: './yatrayen-page.component.html',
  styleUrls: ['./yatrayen-page.component.scss']
})
export class YatrayenPageComponent implements OnInit {

  resourceUrl = '/yatrayen';
  yatrayen = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchYatrayenList();
    
  }

  async fetchYatrayenList() {
    const response = await this.apiService.get(this.resourceUrl).toPromise();
    const yatrayen = response['data'];
    this.yatrayen = yatrayen;
  }

}
