import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";

export class Client {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;

    constructor(){
        this.id =0;
        this.username = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.createdAt = new Date();
    }
}
