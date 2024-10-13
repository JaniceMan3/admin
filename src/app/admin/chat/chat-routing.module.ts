import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat-messages/chat-messages.component';

const routes: Routes = [{
  path: '',
  component: ChatComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule { }

export const routedComponents = [
  ChatComponent,
  ChatMessageComponent
];
