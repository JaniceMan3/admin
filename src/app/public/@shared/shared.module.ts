import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [
    ProductCardComponent,
    CategoryComponent,
    CategoryListComponent
  ],
  exports: [
    ProductCardComponent,
    CategoryComponent,
    CategoryListComponent
  ]
})
export class SharedModule {
}
