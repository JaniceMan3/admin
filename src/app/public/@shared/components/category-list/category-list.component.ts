import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Category } from "../../../../admin/category/category.model";

@Component({
  selector: "ngx-category-list",
  styleUrls: ["./category-list.component.scss"],
  templateUrl: "./category-list.component.html",
})
export class CategoryListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  @Input() categories: Category[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("init");
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClick(category: Category) {
    this.router.navigate(["p", "search"]);
  }
}
