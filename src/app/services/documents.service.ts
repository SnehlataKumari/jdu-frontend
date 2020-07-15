import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllDocuments() {
    return this.apiService.get('/documents');
  }

  submitResponse(suggestionsResponse) {
    return this.apiService.post('/questions/submit-response', suggestionsResponse);
  }

  getAllQuestionsWithAnswers() {
    return this.apiService.get('/questions/with-answers');
  }

  deleteDocument(document) {
    return this.apiService.delete(`/documents/${document._id}`);
  }
}
