import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  hostUrl: string = environment.hostUrl;
  constructor(private httpClient: HttpClient ) { }

  get(url: string, options={}) {
    const fullUrl = `${this.hostUrl}${url}`;
    return this.httpClient.get(fullUrl, options);
  }
  
  post(url: string, data={}, options={}) {
    const fullUrl = `${this.hostUrl}${url}`;
    return this.httpClient.post(fullUrl, data, options);
  }

  put(url: string, data={}, options={}) {
    const fullUrl = `${this.hostUrl}${url}`;
    return this.httpClient.put(fullUrl, data, options);
  }

  delete(url: string, options={}) {
    const fullUrl = `${this.hostUrl}${url}`;
    return this.httpClient.delete(fullUrl, options);
  }
}
