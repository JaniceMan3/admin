import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandComponent } from './brand.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { BrandUpsertComponent } from './brand-upsert/brand-upsert.component';

const routes: Routes = [{
  path: '',
  component: BrandComponent,
  children: [
    {
      path: 'edit',
      component: BrandEditComponent,
    },
    {
      path: 'edit/:id',
      component: BrandUpsertComponent,
    },
    {
      path: 'create',
      component: BrandUpsertComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandRoutingModule { }

export const routedComponents = [
  BrandComponent,
  BrandEditComponent,
  BrandUpsertComponent
];
