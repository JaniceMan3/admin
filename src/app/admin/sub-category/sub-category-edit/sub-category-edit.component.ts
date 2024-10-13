import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { SubCategory } from "../sub-category.model";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { SubCategoryService } from "../sub-category.service";
import { Category } from "../../category/category.model";

@Component({
  selector: "ngx-category-edit",
  templateUrl: "./sub-category-edit.component.html",
  styleUrls: ["./sub-category-edit.component.scss"],
})
export class SubCategoryEditComponent implements OnInit, OnDestroy {
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
      },
      category: {
        title: "Category",
        type: "string",
        editable: false,
        valuePrepareFunction: (category: Category) => {
          return category.name;
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  loading: boolean = true;
  subCategories: SubCategory[];

  constructor(private subCategoryService: SubCategoryService, private router: Router) {}

  ngOnInit(): void {
    this.subCategoryService.listSubCategories()
    .pipe(
      tap(() => {
        this.loading = true;
      }),
      takeUntil(this.destroy$)
    ).subscribe(({ data, loading }) => {
      this.loading = loading;
      this.subCategories = data.listSubCategorys;
      this.source.load(this.subCategories);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEdit(event): void {
    this.router.navigate(["admin", "sub-category", "edit", event.data.id]);
  }
}
