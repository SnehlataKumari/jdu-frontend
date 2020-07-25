import { Component, OnInit, Input, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {

  @Input() imgUrl = '/assets/img/upcoming_events/001.jpg';
  @Input() title = 'Economic Solution, Force on Youth';
  @Input() description = `Self-help allowance of Rs 1000 per month for all youth between 20 and 25 years and
        student loans up to Rs 4 lakh for all 12th grade passing students through credit cards and for which the
        state guarantor is like five Ambitious schemes are running under this determination.`;
  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDetails(content) {
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    // }, (reason) => {
    // });

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