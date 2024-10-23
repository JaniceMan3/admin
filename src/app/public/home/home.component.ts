import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { Banner } from '../../admin/banner/banner.model';
import { Subject } from 'rxjs';
import { Category } from '../../admin/category/category.model';
import { Product } from '../../admin/product/product';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  banners: Banner[];
  categories: Category[];
  products: any[];

  constructor() {}

  ngOnInit(): void {
    console.log('init');

    this.categories = [
      {
        "name": "Nutrientes",
        "id": "Nutrientes",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Iluminação",
        "id": "Decoração",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "bulb-outline"
    },
    {
        "name": "Hidroponia",
        "id": "Hidroponia",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "droplet-outline"
    },
    {
        "name": "Irrigação",
        "id": "Irrigação",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Colheita",
        "id": "Colheita",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Pragas",
        "id": "Pragas",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Potes e Vasos",
        "id": "Potes e Vasos",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Substratos",
        "id": "Substratos",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Controle",
        "id": "Controle",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Clonagem",
        "id": "Clonagem",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "copy-outline"
    },
    {
        "name": "Tendas",
        "id": "Tendas",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    {
        "name": "Circulação",
        "id": "Circulação",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "arrow-ios-back-outline"
    },
    ]

    this.products = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
