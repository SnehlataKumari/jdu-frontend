import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpEventType } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  progress = new Subject();
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

  uploadFile(file) {
    return this.apiService.post('/documents/upload', file, {
      reportProgress: true,
      observe: "events"
    })
      .pipe(
        map((event: any) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.progress.next(Math.round((100 / event.total) * event.loaded));
          } else if (event.type == HttpEventType.Response) {
            // this.progress.next(null);
            return event.body;
          }
        }),
        catchError((err: any) => {
          // this.progress.next(null);
          alert(err.message);
          return throwError(err.message);
        })
      )
  }

  getUsersDocuments() {
    return this.apiService.get('/documents/role-wise');
  }

  create(obj) {
    return this.apiService.post('/documents', obj);
  }
}
