import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent, data: {route: 'home'} },
      { path: 'profile', component: ProfileComponent, data: {route: 'profile'} },
      { path: 'services', component: ServicesComponent },
      { path: 'skills', component: SkillsComponent },
    ],
    component: ShellComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
