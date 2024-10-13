import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { BannerService } from "../banner.service";
import { Banner } from "../banner.model";
import { NgForm } from "@angular/forms";
import { takeUntil, tap } from "rxjs/operators";
import {
  NbToastrService,
  NbComponentStatus,
  NbGlobalPhysicalPosition,
} from "@nebular/theme";
import { Subject } from "rxjs";

@Component({
  selector: "ngx-banner-upsert",
  styleUrls: ["./banner-upsert.component.scss"],
  templateUrl: "./banner-upsert.component.html",
})
export class BannerUpsertComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  id: string;
  loading: boolean = false;
  banner: Banner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private bannerService: BannerService
  ) {
    this.banner = new Banner();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");

      if (this.id) {
        this.bannerService
          .findUniqueBanner(this.id)
          .pipe(
            tap(() => {
              this.loading = true;
            }),
            takeUntil(this.destroy$)
          )
          .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.banner = Object.assign({}, data.findUniqueBanner);
          });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(form: NgForm) {
    const banner = {
      ...form.value,
      id: this.id,
    } as Banner;

    if (this.id) {
      this.bannerService
        .updateBanner(banner)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Banner has been successfully updated`,
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
      this.bannerService
        .createBanner(banner)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          ({ data }) => {
            this.toastrService.show(
              null,
              `Banner has been successfully created`,
              {
                status: "success",
              }
            );

            this.router.navigate([
              "admin",
              "banner",
              "edit",
              data.createBanner.id,
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
}
