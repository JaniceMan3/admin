import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { takeUntil, tap } from "rxjs/operators";
import {
  NbToastrService,
} from "@nebular/theme";
import { Subject } from "rxjs";
import { SubCategoryService } from "../sub-category.service";
import { SubCategory } from "../sub-category.model";
import { Category } from "../../category/category.model";

@Component({
  selector: "ngx-category-upsert",
  styleUrls: ["./sub-category-upsert.component.scss"],
  templateUrl: "./sub-category-upsert.component.html",
})
export class SubCategoryUpsertComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  id: string;
  loading: boolean = false;
  subCategory: SubCategory;
  categories: Category[] = []; //TODO:

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private subCategoryService: SubCategoryService
  ) {
    this.subCategory = new SubCategory();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");

      if (this.id) {
        this.subCategoryService
          .findUniqueSubCategory(this.id)
          .pipe(
            tap(() => {
              this.loading = true;
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.subCategory = Object.assign({}, data.findUniqueSubCategory);
            this.subCategory.category = Object.assign({}, data.findUniqueSubCategory.category);
            this.categories = data.listCategorys;
          });
      } else {
        this.subCategoryService
          .listCategories()
          .pipe(
            tap(() => {
              this.loading = true;
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.categories = data.listCategorys;
          });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(form: NgForm) {
    const subCategory = {
      ...form.value,
      id: this.id,
      category: this.subCategory.category,
      categoryId: this.subCategory.category.id
    } as SubCategory;

    if (this.id) {
      this.subCategoryService
        .updateSubCategory(subCategory)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Sub Category has been successfully updated`,
              {
                status: "success",
              }
            );
          },
          (error) => {
            this.toastrService.show(error.toString(), `Something went wrong`, {
              status: "danger",
            });
          }
        );
    } else {
      this.subCategoryService
        .createSubCategory(subCategory)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Sub Category has been successfully created`,
              {
                status: "success",
              }
            );

            this.router.navigate([
              "admin",
              "sub-category",
              "edit",
              data.createSubCategory.id,
            ]);
          },
          (error) => {
            this.toastrService.show(error.toString(), `Something went wrong`, {
              status: "danger",
            });
          }
        );
    }
  }

  goBackToList() {
    this.router.navigate([
      "admin",
      "sub-category",
      "edit"
    ]);
  }
}
