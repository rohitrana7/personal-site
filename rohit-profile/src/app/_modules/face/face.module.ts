import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceRoutingModule } from './face-routing.module';

import { HomeComponent } from '../../components/home/home.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ShellComponent } from '../../components/shell/shell.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SkillsComponent,
    ShellComponent,
  ],
  imports: [CommonModule, FaceRoutingModule, SharedModule],
})
export class FaceModule {}
