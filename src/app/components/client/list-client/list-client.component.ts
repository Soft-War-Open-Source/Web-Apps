import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Client } from 'src/app/model/client';
import { PaymentMethod } from 'src/app/model/payment_method';
import { Recipe } from 'src/app/model/recipe';
import { ClientService } from 'src/app/services/client.service';
import { BillService } from 'src/app/services/bill.service';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  id: number = 1;
  client: Client = new Client();
  recipes: Recipe[]=[];
  bills: Bill[]=[];
  paymentMethods: PaymentMethod[]=[];

  constructor(private router: Router, 
    private clientService: ClientService,
    private billService: BillService,
    private paymentMethodService: PaymentMethodService) { }

  ngOnInit(): void {
    this.loadDataClient();
  }

  loadDataClient(){
    this.searchClientById();
    this.searchClientFavoriteRecipes();
    this.searchClientPaymentMethods();
    this.searchClientBills();
  }

  deleteClient(client: Client){
    this.deleteClientFavoritesRecipes();
    this.deleteClientPaymentMethods();
    this.deleteClientBills();

    this.clientService.deleteClient(client.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));

    this.router.navigate(['list-clients'])
  }

  updateClient(client: Client){
    this.router.navigate(['update-client', client.id])//Se irá hacia el actualizar ('update')
  }

  searchClientBills(){
    this.billService.getBillByClient(this.id)
    .subscribe(bills=>this.bills=bills);
  }

  deleteClientBills(){
    for (let bill of this.bills){
      this.billService.deleteBill(bill.id)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
    }
  }

  searchClientPaymentMethods(){
    this.paymentMethodService.getPaymentMethodByClient(this.id)
    .subscribe(paymentMethods=>this.paymentMethods=paymentMethods);
  }

  deleteClientPaymentMethods(){
    for (let paymentMethod of this.paymentMethods){
      this.paymentMethodService.deletePaymentMethod(paymentMethod.id)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
    }
  }

  searchClientFavoriteRecipes(){
    this.clientService.getClientFavoriteRecipes(this.id)
    .subscribe(recipes=>this.recipes=recipes);
  }

  deleteClientFavoritesRecipes(){
    for (let recipe of this.recipes){
      this.clientService.deleteClientFavoriteRecipe(recipe.id, this.client.id)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
    }
  }

  searchClientById(){
    this.clientService.getClientById(this.id)
    .subscribe(client=>this.client=client);
  }
  
}
