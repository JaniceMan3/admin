import { Chat } from "./chat.model";
import { User } from "./user.model";

export class Message {
    id!: string;
    userId!: string;
    chatId!: string;
    text!: string;
    imgUrl!: string | null;
    createdAt!: Date;
    isRead!: boolean;
    user?: User;
    chat?: Chat;
}
