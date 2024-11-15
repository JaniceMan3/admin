import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { Banner } from '../../admin/banner/banner.model';
import { Subject } from 'rxjs';
import { Category } from '../../admin/category/category.model';
import { Product } from '../../admin/product/product';
import { PaidAds } from '../../admin/paidAds/paidAds';


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
  products: Product[];
  recentProducts: Product[];
  paidAds: any[];

  constructor() {}

  ngOnInit(): void {
    console.log('init');

    this.categories = [
    {
        "name": "Iluminação",
        "id": "iluminacao",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-lightbulb"
    },
    {
        "name": "Exaustores/Filtros",
        "id": "exaustores",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-fan"
    },
    {
        "name": "Estufas",
        "id": "estufas",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-home"
    },
    {
        "name": "Medidores",
        "id": "medidores",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-thermometer"
    },
    {
        "name": "Acessórios",
        "id": "acessorios",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-binoculars"
    },
    {
      "name": "Outros",
      "id": "outros",
      "updatedAt": new Date(),
      "createdAt": new Date(),
      "icon": "fa-plus"
  }    
    
    ]

    this.products = [{
      id: "1",
      userId: "1",
      categoryId: "exaustores",
      sub_categoryId: "1",
      brandId: "1",
      name: "Exaustor Leds Indoor",
      description: "",
      conditionId: "1",
      price: 177,
      previousPrice: 249,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Exaustor1.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "exaustores",
      sub_categoryId: "1",
      brandId: "1",
      name: "Exaustor MarsHydro",
      description: "",
      conditionId: "1",
      price: 149,
      previousPrice: 199,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Exaustor2.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "exaustores",
      sub_categoryId: "1",
      brandId: "1",
      name: "Exaustor Branco",
      description: "",
      conditionId: "1",
      price: 120,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Exaustor3.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "exaustores",
      sub_categoryId: "1",
      brandId: "1",
      name: "Exaustor HighPro",
      description: "",
      conditionId: "1",
      price: 199,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Exaustor4.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "iluminacao",
      sub_categoryId: "1",
      brandId: "1",
      name: "LED 640W",
      description: "",
      conditionId: "1",
      price: 1899,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Iluminacao1.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "iluminacao",
      sub_categoryId: "1",
      brandId: "1",
      name: "LED Duplo",
      description: "",
      conditionId: "1",
      price: 1199,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Iluminacao2.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "iluminacao",
      sub_categoryId: "1",
      brandId: "1",
      name: "LED 240W",
      description: "",
      conditionId: "1",
      price: 649,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/Iluminacao3.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "estufas",
      sub_categoryId: "1",
      brandId: "1",
      name: "Estufa Simples",
      description: "",
      conditionId: "1",
      price: 650,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/tenda2.jpg"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "estufas",
      sub_categoryId: "1",
      brandId: "1",
      name: "Estufa Tripla",
      description: "",
      conditionId: "1",
      price: 2400,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/tenda8.png"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "estufas",
      sub_categoryId: "1",
      brandId: "1",
      name: "Estufa Master",
      description: "",
      conditionId: "1",
      price: 1600,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "../../../assets/images/tenda5.png"
      ]
    }]

    this.recentProducts = JSON.parse(JSON.stringify(this.products))
    
    this.recentProducts = this.recentProducts.reverse()
    
    this.recentProducts.forEach(p => {
      p.isPromoted = false;
      return p;
    });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
