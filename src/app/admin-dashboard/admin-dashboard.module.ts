import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ResourceActionsComponent } from './components/resource-actions/resource-actions.component';
import { CreateResourceComponent } from './components/create-resource/create-resource.component';
import { CreateResourceFormComponent } from './components/create-resource-form/create-resource-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateResourceFormComponent } from './components/update-resource-form/update-resource-form.component';
import { UpdateResourceDialogComponent } from './components/update-resource-dialog/update-resource-dialog.component';
import { ClassesPageComponent } from './components/classes-page/classes-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { BooleanComponent } from './components/boolean/boolean.component';
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
import { SharedModule } from '../shared/shared.module';
import { DocumentsPageComponent } from './components/documents-page/documents-page.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SendMessagesComponent } from './components/send-messages/send-messages.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ResourceComponent,
    ResourceActionsComponent,
    CreateResourceComponent,
    CreateResourceFormComponent,
    UpdateResourceFormComponent,
    UpdateResourceDialogComponent,
    ClassesPageComponent,
    VideosPageComponent,
    BooleanComponent,
    CreateVideoFormComponent,
    ChaptersPageComponent,
    CreateChapterFormComponent,
    SubjectsPageComponent,
    CreateSubjectFormComponent,
    CreateClassFormComponent,
    LiveStreamComponent,
    PrivateRoomComponent,
    PublicRoomComponent,
    LiveStreamerComponent,
    DocumentsPageComponent,
    UploadDocumentComponent,
    DashboardComponent,
    SendMessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AdminDashboardRoutingModule,
  ]
})
export class AdminDashboardModule { }
