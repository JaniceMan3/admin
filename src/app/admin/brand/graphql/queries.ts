import { gql } from "apollo-angular";

export const LIST_BRANDS = () => gql`
  query ListBrands {
    listBrands {
      createdAt
      id
      name
      updatedAt
    }
  }
`;

export const FIND_UNIQUE_BRAND = (id: string) =>
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
