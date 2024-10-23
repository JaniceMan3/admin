import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../../admin/product/product';

@Component({
  selector: 'ngx-home-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
})
export class ProductHomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
