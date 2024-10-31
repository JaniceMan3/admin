import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Category } from "../../../../admin/category/category.model";

@Component({
  selector: "ngx-category",
  styleUrls: ["./category.component.scss"],
  templateUrl: "./category.component.html",
})
export class CategoryComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  @Input() category: Category;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("init");
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClick() {
    this.router.navigate(["search"], { queryParams: {category: this.category.id} });
  }
}
