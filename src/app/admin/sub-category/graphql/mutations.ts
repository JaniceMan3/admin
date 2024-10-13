import { gql } from "apollo-angular";
import { SubCategory } from "../sub-category.model";

export const UPDATE_SUB_CATEGORY = (subCategory: SubCategory) => gql`
 mutation UpdateSubCategory {
    updateSubCategory(
        data: { 
            name: { set: "${subCategory.name}" },
            category: { connect: { id: "${subCategory.categoryId}" } }
        }, 
        where: { 
            id: "${subCategory.id}" 
        }) {
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
}
`;

export const CREATE_SUB_CATEGORY = (subCategory: SubCategory) => gql`
    mutation CreateSubCategory {
    createSubCategory(
        data: { 
            name: "${subCategory.name}",
            category: { connect: { id: "${subCategory.categoryId}" } }
        }
    ) {
        categoryId
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
}
`;
