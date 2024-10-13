import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { CategoryService } from "../category.service";
import { Router } from "@angular/router";
import { Category } from "../category.model";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "ngx-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.scss"],
})
export class CategoryEditComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  
  settings = {
    mode: 'external',
    actions: {
      add: false,
      delete: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      id: {
        title: "ID",
        type: "string",
        editable: false,
      },
      name: {
        title: "Name",
        type: "string",
        editable: false,
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  loading: boolean = true;
  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.categoryService.listCategories()
    .pipe(
      tap(() => {
        this.loading = true;
      }),
      takeUntil(this.destroy$)
    ).subscribe(({ data, loading }) => {
      this.loading = loading;
      this.categories = data.listCategorys;
      this.source.load(this.categories);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEdit(event): void {
    this.router.navigate(["admin", "category", "edit", event.data.id]);
  }
}
