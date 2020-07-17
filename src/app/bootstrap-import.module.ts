import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const bootstrapImports = [
  NgbModule
];

@NgModule({
  imports: [
    ...bootstrapImports
  ],
  exports: [
    ...bootstrapImports
  ]
})
export class BootstrapImportModule { }