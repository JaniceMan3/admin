import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCategoryComponent } from './sub-category.component';
import { SubCategoryEditComponent } from './sub-category-edit/sub-category-edit.component';
import { SubCategoryUpsertComponent } from './sub-category-upsert/sub-category-upsert.component';

const routes: Routes = [{
  path: '',
  component: SubCategoryComponent,
  children: [
    {
      path: 'edit',
      component: SubCategoryEditComponent,
    },
    {
      path: 'edit/:id',
      component: SubCategoryUpsertComponent,
    },
    {
      path: 'create',
      component: SubCategoryUpsertComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCategoryRoutingModule { }

export const routedComponents = [
  SubCategoryComponent,
  SubCategoryEditComponent,
  SubCategoryUpsertComponent
];
