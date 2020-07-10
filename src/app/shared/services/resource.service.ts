import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private api: ApiService) { }

  fetchAll(resourceUrl: string) {
    return this.api.get(resourceUrl);  
  }

  delete(resourceUrl, reource) {
    const url = `${resourceUrl}/${reource._id}`;
    return this.api.delete(url);
  }
}
