import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { BrandService } from "../brand.service";
import { Brand } from "../brand.model";
import { NgForm } from "@angular/forms";
import { takeUntil, tap } from "rxjs/operators";
import {
  NbDialogService,
  NbToastrService,
} from "@nebular/theme";
import { Subject } from "rxjs";
import { DialogPromptComponent } from "../../../@theme/components/dialogs/dialog-name-prompt/dialog-prompt.component";

@Component({
  selector: "ngx-brand-upsert",
  styleUrls: ["./brand-upsert.component.scss"],
  templateUrl: "./brand-upsert.component.html",
})
export class BrandUpsertComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  id: string;
  loading: boolean = false;
  brand: Brand;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,
    private brandService: BrandService
  ) {
    this.brand = new Brand();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");

      if (this.id) {
        this.brandService
          .findUniqueBrand(this.id)
          .pipe(
            tap(() => {
              this.loading = true;
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.brand = Object.assign({}, data.findUniqueBrand);
          });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(form: NgForm) {
    const brand = {
      ...form.value,
      id: this.id
    } as Brand;

    if (this.id) {
      this.brandService
        .updateBrand(brand)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Brand has been successfully updated`,
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
      this.brandService
        .createBrand(brand)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Brand has been successfully created`,
              {
                status: "success",
              }
            );

            this.router.navigate([
              "admin",
              "brand",
              "edit",
              data.createBrand.id,
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

  onDelete(){
    if (!this.id) return;

    this.dialogService.open(DialogPromptComponent)
        .onClose.subscribe(result => result && this.onDeleteConfirmation());
  }

  onDeleteConfirmation() {    
    if (!this.id) return;

    this.brandService
        .deleteBrand(this.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Brand has been successfully deleted`,
              {
                status: "success",
              }
            );
            this.goBackToList()
          },
          (error) => {
            this.toastrService.show(error.toString(), `Something went wrong`, {
              status: "danger",
            });
          }
        );
  }

  goBackToList() {
    this.router.navigate([
      "admin",
      "brand",
      "edit"
    ]);
  }
}
