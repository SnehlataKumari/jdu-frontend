import { Component, OnInit, Input, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-card-impacts',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardImpactsComponent implements OnInit {

  @Input() imgUrl = '/assets/img/upcoming_events/001.jpg';
  @Input() index;
  @Input() title = 'National Executive: Energy-rich JDU';
  @Input() description = `In an important meeting of the National Executive held in
          Delhi, JDU made its stand clear on many issues. The party was overwhelmed with new energy with a pledge
          addressed by the National President, Nitish Kumar. `;
  @Input() redirectUrl;
  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openDetails() {
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    // }, (reason) => {
    // });

    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
      return;
    }

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}

export interface DialogData {
  description: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<p>{{data.description}}</p>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Close</button>
    </div>
  `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}