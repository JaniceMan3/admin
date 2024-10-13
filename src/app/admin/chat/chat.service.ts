import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { FIND_UNIQUE_CHAT, LIST_CHATS } from './graphql/queries';
import { Chat } from './chat.model';
import { CREATE_CHAT  } from './graphql/mutations';


@Injectable()
export class ChatService {

  constructor(private readonly apollo: Apollo) {}

  listChats(): Observable<any> {
    return this.apollo
      .watchQuery<Chat>({
        query: LIST_CHATS(),
      })
      .valueChanges
  }

  findUniqueChat(id: Chat["id"]): Observable<any> {
    return this.apollo
      .watchQuery<Chat>({
        query: FIND_UNIQUE_CHAT(id),
      })
      .valueChanges
  }

  createChat(category: Chat) {
    return this.apollo
      .mutate<any>({
        mutation: CREATE_CHAT(category),
      });
  }
}
