import { ChatCount } from "./chat-count.model";
import { Message } from "./message.model";
import { User } from "./user.model";

export class Chat {
    id!: string;
    userFromId!: string;
    userToId!: string;
    createdAt!: Date;
    isActive!: boolean;
    userFrom?: User;
    userTo?: User;
    messages?: Array<Message>;
    //review?: Review | null;
    _count?: ChatCount;
}
