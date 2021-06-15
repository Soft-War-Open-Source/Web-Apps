import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
import { Client } from "./client";

export class Bill {
    id: number;
    client: Client;
    billDate: Date;
    amount: number;
    ruc: number;

    constructor(){
        this.id =0;
        this.client = new Client();
        this.billDate = new Date();
        this.amount = 0;
        this.ruc = 0;
    }
}