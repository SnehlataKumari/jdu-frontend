import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MaterialImportModule } from '../material-import.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ResourceActionsComponent } from './components/resource-actions/resource-actions.component';
import { CreateResourceComponent } from './components/create-resource/create-resource.component';
import { CreateResourceFormComponent } from './components/create-resource-form/create-resource-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateResourceFormComponent } from './components/update-resource-form/update-resource-form.component';
import { UpdateResourceDialogComponent } from './components/update-resource-dialog/update-resource-dialog.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { ClassesPageComponent } from './components/classes-page/classes-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { BooleanComponent } from './components/boolean/boolean.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { CreateVideoFormComponent } from './components/create-video-form/create-video-form.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { CreateChapterFormComponent } from './components/create-chapter-form/create-chapter-form.component';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { CreateSubjectFormComponent } from './components/create-subject-form/create-subject-form.component';
import { CreateClassFormComponent } from './components/create-class-form/create-class-form.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { PrivateRoomComponent } from './components/private-room/private-room.component';
import { PublicRoomComponent } from './components/public-room/public-room.component';
import { LiveStreamerComponent } from './components/live-streamer/live-streamer.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    SideMenuComponent,
    ResourceComponent,
    ResourceActionsComponent,
    CreateResourceComponent,
    CreateResourceFormComponent,
    UpdateResourceFormComponent,
    UpdateResourceDialogComponent,
    UsersPageComponent,
    ClassesPageComponent,
    VideosPageComponent,
    BooleanComponent,
    CreateUserFormComponent,
    CreateVideoFormComponent,
    ChaptersPageComponent,
    CreateChapterFormComponent,
    SubjectsPageComponent,
    CreateSubjectFormComponent,
    CreateClassFormComponent,
    LiveStreamComponent,
    PrivateRoomComponent,
    PublicRoomComponent,
    LiveStreamerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminDashboardRoutingModule,
    MaterialImportModule
  ]
})
export class AdminDashboardModule { }
