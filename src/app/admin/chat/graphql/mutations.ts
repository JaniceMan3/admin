import { gql } from "apollo-angular";
import { Chat } from "../chat.model";

export const UPDATE_CHAT = (chat: Chat) => gql`
 mutation UpdateChat {
    updateChat(
        data: { 
            name: { set: "${chat.id}" }
        }, 
        where: { 
            id: "${chat.id}" 
        }) {
        createdAt
        id
        name
        updatedAt
        _count {
            products
        }
    }
}
`;

export const CREATE_CHAT = (chat: Chat) => gql`
    mutation CreateChat {
    createChat(data: { name: "${chat.id}" }) {
        createdAt
        id
        name
        updatedAt
        _count {
            products
        }
    }
}
`;

export const DELETE_CHAT = (id: string) => gql`
    mutation DeleteChat {
    deleteChat(where: { id: "${id}" }) {
        createdAt
        id
        name
        updatedAt
    }
}
`;
