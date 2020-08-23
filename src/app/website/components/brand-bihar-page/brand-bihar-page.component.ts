import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-brand-bihar-page',
  templateUrl: './brand-bihar-page.component.html',
  styleUrls: ['./brand-bihar-page.component.scss']
})
export class BrandBiharPageComponent implements OnInit {

  resourceUrl = '/brand-bihar';
  show=[];
  brandBiharList = [];
  constructor(
    private apiService: ApiService,
    protected sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.fetchBrandBiharList();
  }
  baseUrl:string = 'https://www.youtube.com/embed/';
  async fetchBrandBiharList() {
    const response = await this.apiService.get(this.resourceUrl).toPromise();
    const yatrayen = response['data'];
    this.show = yatrayen.map(()=>false);
    this.brandBiharList= yatrayen.map((item)=> {
      const videoId= item.videoUrl;
      const videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}${videoId}`);
      return { ...item, videoUrl };
    });
    console.log(this.brandBiharList);
  }

}
