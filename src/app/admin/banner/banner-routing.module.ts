import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './banner.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerUpsertComponent } from './banner-upsert/banner-upsert.component';

const routes: Routes = [{
  path: '',
  component: BannerComponent,
  children: [
    {
      path: 'edit',
      component: BannerEditComponent,
    },
    {
      path: 'edit/:id',
      component: BannerUpsertComponent,
    },
    {
      path: 'create',
      component: BannerUpsertComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BannerRoutingModule { }

export const routedComponents = [
  BannerComponent,
  BannerEditComponent,
  BannerUpsertComponent
];
