import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-show-yatra',
  templateUrl: './show-yatra.component.html',
  styleUrls: ['./show-yatra.component.scss']
})
export class ShowYatraComponent implements OnInit {

  yatra;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.fetchYatra(paramMap.get('id')).then(()=>window.scrollTo(0,0))

    });
  }

  async fetchYatra(id) {
    const response = await this.apiService.get(`/yatrayen/${id}`).toPromise();
    this.yatra = response['data'];
  }

}
