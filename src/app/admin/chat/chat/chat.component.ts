import { Component, OnDestroy, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Chat } from "../chat.model";
import { Subject } from "rxjs";

@Component({
  selector: "ngx-chat",
  styleUrls: ["./chat.component.scss"],
  templateUrl: "./chat.component.html",
})
export class ChatComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  id: string;
  loading: boolean = false;
  chat: Chat;

  constructor(
    private chatService: ChatService
  ) {
    this.chat = new Chat();
  }

  ngOnInit(): void {
    console.log('init')
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
