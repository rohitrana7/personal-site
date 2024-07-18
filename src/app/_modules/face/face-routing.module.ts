import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { ShellComponent } from 'src/app/components/shell/shell.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { InterviewComponent } from 'src/app/components/interview/interview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent, data: {route: 'home'} },
      { path: 'profile', component: ProfileComponent, data: {route: 'profile'} },
      { path: 'services', component: ServicesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'interview', component: InterviewComponent },
    ],
    component: ShellComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FaceRoutingModule { }
