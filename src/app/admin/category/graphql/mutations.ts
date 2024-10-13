import { gql } from "apollo-angular";
import { Category } from "../category.model";

export const UPDATE_CATEGORY = (category: Category) => gql`
 mutation UpdateCategory {
    updateCategory(
        data: { 
            name: { set: "${category.name}" }
        }, 
        where: { 
            id: "${category.id}" 
        }) {
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

const buildSubCategoryWhere = (id: string) => {
    return `{ id: "${id}" }`;
}

export const CREATE_CATEGORY = (category: Category) => gql`
    mutation CreateCategory {
    createCategory(data: { name: "${category.name}" }) {
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
