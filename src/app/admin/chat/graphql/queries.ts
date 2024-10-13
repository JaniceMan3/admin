import { gql } from "apollo-angular";

export const LIST_CHATS = () => gql`
  query ListBrands {
    listBrands {
      createdAt
      id
      name
      updatedAt
    }
  }
`;

export const FIND_UNIQUE_CHAT = (id: string) =>
  gql`
  query FindUniqueBrand {
    findUniqueBrand(where: { id: "${id}" }) {
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
