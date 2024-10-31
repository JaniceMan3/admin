import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PublicComponent } from './public.component';

const routes: Routes = [{
  path: '',
  component: PublicComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule),
    },
    {
      path: 'search',
      loadChildren: () => import('./search/search.module')
        .then(m => m.SearchModule),
    },
    {
      path: 'p/:id',
      component: HomeComponent,
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {
}
