import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllQuestions() {
    return this.apiService.get('/questions');
  }

  submitResponse(suggestionsResponse) {
    return this.apiService.post('/questions/submit-response', suggestionsResponse);
  }

  getAllQuestionsWithAnswers() {
    return this.apiService.get('/questions/with-answers');
  }
}
