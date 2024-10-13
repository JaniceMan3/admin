import { gql } from "apollo-angular";

export const LIST_SUB_CATEGORIES = () => gql`
  query ListSubCategorys {
    listSubCategorys {
      createdAt
      id
      name
      updatedAt
      category {
          id
          name
      }
    }
  }
`;

export const FIND_UNIQUE_SUB_CATEGORY = (id: string) =>
  gql`
  query FindUniqueSubCategory {
    findUniqueSubCategory(where: { id: "${id}" }) {
        createdAt
        id
        name
        updatedAt
        category {
            id
            name
        }
        _count {
            Product
        }
    }        
    listCategorys {
        id
        name
    }
}
`;

export const LIST_CATEGORIES = () => gql`
  query ListCategorys {
    listCategorys {
        id
        name
    }
  }
`;
