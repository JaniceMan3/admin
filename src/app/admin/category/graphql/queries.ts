import { gql } from "apollo-angular";

export const LIST_CATEGORIES = () => gql`
  query ListCategorys {
    listCategorys {
      createdAt
      id
      name
      updatedAt
      SubCategory {
        id
        name
      }
    }
  }
`;

export const FIND_UNIQUE_CATEGORY = (id: string) =>
  gql`
  query FindUniqueCategory {
    findUniqueCategory(where: { id: "${id}" }) {
        createdAt
        id
        name
        updatedAt
        SubCategory {
            id
            name
        }
        _count {
            Product
            SubCategory
        }
    }
}
`;
