import { Component, OnInit, Inject } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditSuggestionComponent } from '../edit-suggestion/edit-suggestion.component';

@Component({
  selector: 'app-add-suggestions',
  templateUrl: './add-suggestions.component.html',
  styleUrls: ['./add-suggestions.component.scss']
})
export class AddSuggestionsComponent implements OnInit {

  resourceUrl = '/scheme';
  schemes = [];
  
  
  constructor(
    private resourceService: ResourceService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    
    
    this.resetList();
  }

  async resetList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.schemes = list['data'];
  }

  async onAdd() {
    this.router.navigate(['admin','add-scheme']);
  }
  async delete(scheme) {
    await this.resourceService.delete(this.resourceUrl, scheme).toPromise();
    this.resetList();
  }

  edit(scheme) {
    console.log(scheme);
    

    const dialogRef = this.dialog.open(EditSuggestionComponent, {
      width: '600px',
      data: {
        scheme
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetList();
    });
  }

}

