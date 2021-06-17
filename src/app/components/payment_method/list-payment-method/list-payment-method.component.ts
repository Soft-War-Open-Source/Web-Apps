import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { PaymentMethod } from 'src/app/model/payment_method';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-payment-method',
  templateUrl: './list-payment-method.component.html',
  styleUrls: ['./list-payment-method.component.css']
})
export class ListPaymentMethodComponent implements OnInit {
  client_id: number = 1;
  clients: Client[]=[]
  payments2: PaymentMethod[]=[];
  payments: PaymentMethod[]=[];

  constructor(private router: Router,
     private paymentMethodService: PaymentMethodService,
     private clientService: ClientService) { }

  ngOnInit(): void {
    this.payments.push(new PaymentMethod());
    this.assignClient();
    this.loadDataPaymentMethods();
  }

  loadDataPaymentMethods(){
    this.paymentMethodService.getPaymentMethodByClient(this.client_id)
    .subscribe(payments2=>this.payments2 = payments2);
  }

  deletePaymentMethod(payment_method: PaymentMethod){
    this.paymentMethodService.deletePaymentMethod(payment_method.id)
    .subscribe(data=>{this.loadDataPaymentMethods();})
  }

  updatePaymentMethod(payment_method: PaymentMethod){
    this.router.navigate(['actualizar', payment_method.id]); //cambiar enlace update
  }

  assignClient(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>this.clients.push(datos));
  }

  insertPaymentMethod(){
    this.payments[0].client = this.clients[0];
    this.paymentMethodService.createPaymentMethod(this.payments[0])
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.payments = [];
    this.clients = [];
    this.router.navigate(['list-payment-methods']);
  }
}