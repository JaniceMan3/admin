export class Banner {
    id!: string;
    title!: string;
    text!: string;
    imgUrl!: string | null;
    link!: string | null;
    createdAt!: Date;
    isActive!: boolean;
    sorting!: number;
    viewCount!: number | null;
    clickCount!: number | null;

    constructor() {
        this.isActive = false;        
    }
}
