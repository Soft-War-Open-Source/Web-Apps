import { ClientFavoriteRecipes } from "./client_favorite_recipes";

export class Client {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    clientAssoc: Array<ClientFavoriteRecipes>;

    constructor(){
        this.id =0;
        this.userName = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.createdAt = new Date();
        this.clientAssoc = new Array<ClientFavoriteRecipes>();
    }
}
