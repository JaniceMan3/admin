import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { BrandService } from "../brand.service";
import { Router } from "@angular/router";
import { Brand } from "../brand.model";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "ngx-brand-edit",
  templateUrl: "./brand-edit.component.html",
  styleUrls: ["./brand-edit.component.scss"],
})
export class BrandEditComponent implements OnInit, OnDestroy {
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
  brands: Brand[];

  constructor(private brandService: BrandService, private router: Router) {
  }

  ngOnInit(): void {
    this.brandService.listBrands()
    .pipe(
      tap(() => {
        this.loading = true;
      }),
      takeUntil(this.destroy$)
    ).subscribe(({ data, loading }) => {
      this.loading = loading;
      this.brands = data.listBrands;
      this.source.load(this.brands);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEdit(event): void {
    this.router.navigate(["admin", "brand", "edit", event.data.id]);
  }
}
