import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { ChatService } from "../chat.service";
import { Router } from "@angular/router";
import { Chat } from "../chat.model";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "ngx-chat-messages",
  templateUrl: "./chat-messages.component.html",
  styleUrls: ["./chat-messages.component.scss"],
})
export class ChatMessageComponent implements OnInit, OnDestroy {
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
  brands: Chat[];

  constructor(private brandService: ChatService, private router: Router) {
  }

  ngOnInit(): void {
    this.brandService.listChats()
    .pipe(
      tap(() => {
        this.loading = true;
      }),
      takeUntil(this.destroy$)
    ).subscribe(({ data, loading }) => {
      this.loading = loading;
      this.brands = data.listChats;
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
