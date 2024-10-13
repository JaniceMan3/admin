import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryUpsertComponent } from './category-upsert/category-upsert.component';

const routes: Routes = [{
  path: '',
  component: CategoryComponent,
  children: [
    {
      path: 'edit',
      component: CategoryEditComponent,
    },
    {
      path: 'edit/:id',
      component: CategoryUpsertComponent,
    },
    {
      path: 'create',
      component: CategoryUpsertComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule { }

export const routedComponents = [
  CategoryComponent,
  CategoryEditComponent,
  CategoryUpsertComponent
];
