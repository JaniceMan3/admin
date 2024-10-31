import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { HomeModule } from "./home/home.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { ProductDetailsModule } from "./product-details/product-details.module";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";
import { SearchModule } from "./search/search.module";
import { SharedModule } from "./@shared/shared.module";
@NgModule({
  imports: [
    PublicRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    HomeModule,
    SearchModule,
    ProductDetailsModule,
    SharedModule
  ],
  declarations: [PublicComponent],
})
export class PublicModule {}
