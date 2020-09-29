import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-login-history',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class LoginHistoryComponent implements OnInit {

  form: FormGroup;
  user;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  

  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<LoginHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.user = data.user;
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.displayedColumns = [
      'srNo',
      'ip',
      'loginTime',
    ];

    this.fetchLoginHistory();
  }

  async fetchLoginHistory() {
    const response = await this.api.get(`/auth/${this.user._id}/get-login-details`).toPromise() as any[];
    this.dataSource = new MatTableDataSource(response.map((login) => {
      return {
        ...login,
        dateTime: moment(login.date).format('DD MMM, YYYY hh:mm:ss a')
      }
    }));
  }

}
