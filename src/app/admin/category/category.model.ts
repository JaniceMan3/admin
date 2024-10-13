import { CategoryCount } from "./category-count.model";

export class Category {
    id!: string;
    name!: string;
    createdAt!: Date;
    updatedAt!: Date | null;
    //Products?: Array<Product>;
    SubCategory?: Array<any>; //TODO:
    _count?: CategoryCount;

    constructor() {
        this.SubCategory = [];
        this._count = new CategoryCount();        
    }
}
