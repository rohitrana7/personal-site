import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewComponent } from './components/interview/interview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ShellComponent } from './components/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent, data: {route: 'home'} },
      { path: 'profile', component: ProfileComponent, data: {route: 'profile'} },
      { path: 'services', component: ServicesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'interview', component: InterviewComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  component: ShellComponent
}
  ];
