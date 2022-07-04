import { categoriesStore } from "$stores/shared/CategoriesStore";

let c_category_id: number = 0;
export class Category {
    public readonly id: number = c_category_id++;

    constructor(public name: Category.Name, public icon: string) {}
}

export namespace Category {
    export enum Name {
        ALL = "All",
        FAVOURITES = "Favourites",
        SOCIALS = "Socials"
    }
}
