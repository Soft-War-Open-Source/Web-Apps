import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { PaymentMethod } from 'src/app/model/payment_method';
import { ClientService } from 'src/app/services/client.service';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-create-payment-method',
  templateUrl: './create-payment-method.component.html',
  styleUrls: ['./create-payment-method.component.css']
})
export class CreatePaymentMethodComponent implements OnInit {
  client_id: number = 1;
  payments: PaymentMethod[]=[];
  clients: Client[]=[];
  payment: PaymentMethod = new PaymentMethod();

  constructor(private router: Router,
    private paymentMethodService: PaymentMethodService,
    private clientService : ClientService) { }

  ngOnInit(): void {
    this.assignClient();
  }

  assignClient(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>this.clients.push(datos));
  }

  insertPaymentMethod(){
    //this.payments.push(new PaymentMethod());
    //this.payments[0].client = this.clients[0];
    //this.paymentMethodService.createPaymentMethod(this.payments[0])
    //.subscribe(datos=>console.log(datos), error=>console.log(error));
    this.paymentMethodService.createPaymentMethod(this.payment)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.payments = [];
    this.clients = [];
    this.router.navigate(['list-payment-methods']);
  }
}
