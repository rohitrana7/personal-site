import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./_modules/face/face.module').then(m => m.FaceModule)
  },
  {
    path: 'auth', loadChildren: () => import('./_modules/operation/operation.module').then(m => m.OperationModule) //load dynamic portfolio mgmt module
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
