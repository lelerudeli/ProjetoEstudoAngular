import { Food } from "../../shared/food.model";

export class Package {

    public name: string;
    public desc: string;
    public imagePath: string;
    public ingredients: Food[];

    constructor(n: string, d: string, i: string, ingredients: Food[]){
        this.name = n;
        this.desc = d;
        this.imagePath = i;
        this.ingredients = ingredients;
    }
}