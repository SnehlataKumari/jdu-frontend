import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportModule } from '../material-import.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolePipe } from './pipes/role.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BootstrapImportModule } from '../bootstrap-import.module';
import { ConstantComponent } from './components/constant/constant.component';
import { UploadComponent } from './components/upload/upload.component';
import { ChartsModule } from 'ng2-charts';
import { AnswersComponent } from './components/answers/answers.component';
import { SuggestionQuestionsComponent } from './components/suggestion-questions/suggestion-questions.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { InformationCardImpactsComponent } from './components/information-card-impacts/information-card-impacts.component';
import { UploadUsersCsvFormComponent } from './components/upload-users-csv-form/upload-users-csv-form.component';
import { AddSuggestionsComponent } from './components/add-suggestions/add-suggestions.component';
import { AddSuggestionsFormComponent } from './components/add-suggestions-form/add-suggestions-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { LangSelectionComponent } from './components/lang-selection/lang-selection.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditSuggestionComponent } from './components/edit-suggestion/edit-suggestion.component';
import { ManageBiharBrandComponent } from './components/manage-bihar-brand/manage-bihar-brand.component';
import { CreateBrandBiharComponent } from './components/create-brand-bihar/create-brand-bihar.component';
import { ManageYatrayenComponent } from './components/manage-yatrayen/manage-yatrayen.component';
import { CreateYatrayenComponent } from './components/create-yatrayen/create-yatrayen.component';
import { InformationCardVideoComponent } from './components/information-card-video/information-card-video.component';
import { ShowYatraComponent } from './components/show-yatra/show-yatra.component';
import { AgGridModule } from 'ag-grid-angular';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListPopupComponent } from './components/users-list-popup/users-list-popup.component';
import { ManageSpeechesComponent } from './components/manage-speeches/manage-speeches.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    SideMenuComponent,
    CreateUserFormComponent,
    UsersPageComponent,
    RolePipe,
    ConstantComponent,
    UploadComponent,
    SuggestionQuestionsComponent,
    AnswersComponent,
    InformationCardComponent,
    InformationCardImpactsComponent,
    UploadUsersCsvFormComponent,
    AddSuggestionsComponent,
    AddSuggestionsFormComponent,
    LangSelectionComponent,
    DashboardComponent,
    EditSuggestionComponent,
    ManageBiharBrandComponent,
    ManageSpeechesComponent,
    CreateBrandBiharComponent,
    ManageYatrayenComponent,
    CreateYatrayenComponent,
    InformationCardVideoComponent,
    ShowYatraComponent,
    UsersListComponent,
    UsersListPopupComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    BootstrapImportModule,
    MatSelectModule,
    MatFormFieldModule,
    ChartsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
    NgMultiSelectDropDownModule.forRoot(),
    AngularMultiSelectModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    MaterialImportModule,
    BootstrapImportModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SideMenuComponent,
    UsersPageComponent,
    RolePipe,
    UploadComponent,
    ConstantComponent,
    SuggestionQuestionsComponent,
    AnswersComponent,
    ChartsModule,
    InformationCardComponent,
    InformationCardImpactsComponent,
    NgMultiSelectDropDownModule,
    AddSuggestionsComponent,
    AngularMultiSelectModule,
    LangSelectionComponent,
    DashboardComponent,
    ShowYatraComponent,
    AgGridModule,
    UsersListComponent,
    ChangePasswordComponent
  ]
})
export class SharedModule { }
