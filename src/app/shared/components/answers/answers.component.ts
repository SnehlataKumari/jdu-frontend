import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuggestionsService } from 'src/app/services/suggestions.service';
import { ChartOptions, ChartType, ChartDataSets, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { countBy} from 'lodash';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Options selected!'
    },
    // We use these empty structures as placeholders for dynamic theming.
    // scales: { xAxes: [{}], yAxes: [{}] },
    // plugins: {
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end',
    //   }
    // }
  };
  public barChartLabels: Label[] = ['Answers'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  public labels;
  
  questionId;
  question;
  answers;
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.questionId = paramMap.get('questionId');
    });

    this.suggestionService.getQuestionWithAnswer(this.questionId).subscribe(response => {
      const data = response['data'];
      this.question = data['question'];
      this.answers= data['answers'];
      const answersCount = countBy(this.answers, 'answer');
      this.barChartData = [{ data: this.question.options.map(option => answersCount[option] || 0), label: 'Number of Answers'}];
      this.labels = this.question.options;
      
      this.loading = false;
    });
  }

}
