import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list-popup',
  templateUrl: './users-list-popup.component.html',
  styleUrls: ['./users-list-popup.component.scss']
})
export class UsersListPopupComponent implements OnInit {

  users;
  constructor(
    public dialogRef: MatDialogRef<UsersListPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.users = data.users;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
