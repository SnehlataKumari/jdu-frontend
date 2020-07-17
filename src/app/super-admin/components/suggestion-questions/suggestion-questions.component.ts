import { Component, OnInit } from '@angular/core';
import { getKeys, QUESTION_CATEGORY } from 'src/app/constants';
import { SuggestionsService } from 'src/app/services/suggestions.service';
import { groupBy } from 'lodash';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-questions',
  templateUrl: './suggestion-questions.component.html',
  styleUrls: ['./suggestion-questions.component.scss']
})
export class SuggestionQuestionsComponent implements OnInit {
  questionKeys;
  QUESTION_CATEGORY = QUESTION_CATEGORY;
  active = 1;
  catogoryWiseQuestions;
  closeResult = '';

  createMode = false;

  questionForm: FormGroup; 

  constructor(
    private suggestionsService: SuggestionsService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questionKeys = getKeys(QUESTION_CATEGORY);
    
    this.fetchQuestions();

    this.questionForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      options: this.fb.array([])
    })
  }

  fetchQuestions() {
    this.suggestionsService.getAllQuestionsWithAnswers().subscribe((suggestions) => {
      this.catogoryWiseQuestions = groupBy(suggestions, 'category')
    });
  }

  addOption() {
    this.options.push(this.fb.control(''));
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  deleteQuestion(question) {
    this.suggestionsService.deleteQuestion(question).subscribe((response) => {
      this.fetchQuestions();
      Swal.fire('', 'Response saved successgully!', 'success');
    });
  }

  dismiss(abc) {
    this.createMode = false;
  }

  save() {
    const value = this.questionForm.value;
    
    if (value.title === '') {
      Swal.fire('', 'Title field cant be blank', 'error')
      return;
    }
    
    if (value.options.length < 2) {
      Swal.fire('', 'There should be atleast 2 options', 'error')
      return;
    }
    this.suggestionsService.createQuestion(value).subscribe((response) => {
      this.fetchQuestions();
      Swal.fire('', 'Response saved successgully!', 'success');
      this.createMode = false;
    })
    
  }

  removeOption(index) {
    this.options.removeAt(index);
  }

  addNewQuestion(questionKey) {

    this.createMode = true;
    this.questionForm.patchValue({
      category: questionKey
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showAnswers(question) {
    //question/:questionId/answers
    this.router.navigate(['admin', 'questions', question._id, 'answers']);
  }
}
