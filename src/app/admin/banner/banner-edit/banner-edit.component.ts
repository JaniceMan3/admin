import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { BannerService } from "../banner.service";
import { Router } from "@angular/router";
import { Banner } from "../banner.model";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "ngx-banner-edit",
  templateUrl: "./banner-edit.component.html",
  styleUrls: ["./banner-edit.component.scss"],
})
export class BannerEditComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  settings = {
    mode: "external",
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
      title: {
        title: "Title",
        type: "string",
        editable: false,
      },
      sorting: {
        title: "Sorting",
        type: "number",
        editable: false,
      },
      clickCount: {
        title: "Click Count",
        type: "number",
        editable: false,
      },
      viewCount: {
        title: "View Count",
        type: "number",
        editable: false,
      },
      isActive: {
        title: "Is Active",
        type: "boolean",
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  loading: boolean = true;
  banners: Banner[];

  constructor(private bannerService: BannerService, private router: Router) {}

  ngOnInit(): void {
    this.bannerService
      .listBanners()
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.banners = data.listBanners;
        this.source.load(this.banners);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEdit(event): void {
    this.router.navigate(["admin", "banner", "edit", event.data.id]);
  }
}
