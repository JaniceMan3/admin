import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../../../../admin/product/product';

@Component({
  selector: 'ngx-product-card',
  styleUrls: ['./product-card.component.scss'],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  @Input() product: Product;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClick() {
    this.router.navigate([
      "home",
      "p",
      this.product.id
    ]);
  }
}
