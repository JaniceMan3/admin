import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { CategoryService } from "../category.service";
import { Category } from "../category.model";
import { NgForm } from "@angular/forms";
import { takeUntil, tap } from "rxjs/operators";
import {
  NbToastrService,
} from "@nebular/theme";
import { Subject } from "rxjs";
import { SubCategory } from "../../sub-category/sub-category.model";

@Component({
  selector: "ngx-category-upsert",
  styleUrls: ["./category-upsert.component.scss"],
  templateUrl: "./category-upsert.component.html",
})
export class CategoryUpsertComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  id: string;
  loading: boolean = false;
  category: Category;
  subCategories: SubCategory[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private categoryService: CategoryService
  ) {
    this.category = new Category();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");

      if (this.id) {
        this.categoryService
          .findUniqueCategory(this.id)
          .pipe(
            tap(() => {
              this.loading = true;
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.category = Object.assign({}, data.findUniqueCategory);
            this.category.SubCategory = [...data.findUniqueCategory.SubCategory]
          });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(form: NgForm) {
    const category = {
      ...form.value,
      id: this.id
    } as Category;

    if (this.id) {
      this.categoryService
        .updateCategory(category)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Category has been successfully updated`,
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
      this.categoryService
        .createCategory(category)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Category has been successfully created`,
              {
                status: "success",
              }
            );

            this.router.navigate([
              "admin",
              "category",
              "edit",
              data.createCategory.id,
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
      "category",
      "edit"
    ]);
  }
}
