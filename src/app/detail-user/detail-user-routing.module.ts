import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailUserPage } from './detail-user.page';

const routes: Routes = [
  {
    path: '',
    component: DetailUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailUserPageRoutingModule {}
