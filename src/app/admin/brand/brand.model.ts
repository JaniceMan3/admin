import { BrandCount } from "./brand-count.model";

export class Brand {
    id!: string;
    name!: string;
    createdAt!: Date;
    updatedAt!: Date | null;
    _count?: BrandCount;

    constructor() {
        this._count = new BrandCount();        
    }
}
