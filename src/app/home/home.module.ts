import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DesignComponent } from '../design/design.component';
import { SurveyComponent } from '../survey/survey.component';
import { TeamComponent } from '../team/team.component';
import { ClientComponent } from '../client/client.component';
import { QCComponent } from '../qc/qc.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'design', component: DesignComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'team', component: TeamComponent },
  { path: 'client', component: ClientComponent },
  { path: 'qc', component: QCComponent },
     ];
   

@NgModule({
  declarations: [
    HomeComponent,
    DesignComponent,
    SurveyComponent,
    TeamComponent,
    QCComponent,
    ClientComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class HomeModule { }
