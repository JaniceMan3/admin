import { Category } from "../category/category.model";
import { SubCategoryCount } from "./sub-category-count.model";

export class SubCategory {
    id!: string;
    name!: string;
    createdAt!: Date;
    updatedAt!: Date | null;
    categoryId!: string;
    category?: Category;
    _count?: SubCategoryCount;

    constructor() {
        this.category = new Category();
        this._count = new SubCategoryCount();        
    }
}