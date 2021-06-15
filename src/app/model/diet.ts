import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";

export class Diet {
    id: number;
    name: string;
    description: string;
    createAt: Date;

    constructor(){
        this.id =0;
        this.name = "";
        this.description = "";
        this.createAt = new Date();
    }
}