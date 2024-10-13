import { gql } from "apollo-angular";
import { Brand } from "../brand.model";

export const UPDATE_BRAND = (brand: Brand) => gql`
 mutation UpdateBrand {
    updateBrand(
        data: { 
            name: { set: "${brand.name}" }
        }, 
        where: { 
            id: "${brand.id}" 
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

export const CREATE_BRAND = (brand: Brand) => gql`
    mutation CreateBrand {
    createBrand(data: { name: "${brand.name}" }) {
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

export const DELETE_BRAND = (id: string) => gql`
    mutation DeleteBrand {
    deleteBrand(where: { id: "${id}" }) {
        createdAt
        id
        name
        updatedAt
    }
}
`;
