import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { PaymentMethod } from 'src/app/model/payment_method';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-payment-method',
  templateUrl: './list-payment-method.component.html',
  styleUrls: ['./list-payment-method.component.css']
})
export class ListPaymentMethodComponent implements OnInit {
  id: number = 0;
  paymentMethod: PaymentMethod = new PaymentMethod();
  client_id: number = 0;
  paymentMethods: PaymentMethod[] = [];

  constructor(private router: Router, private paymentMethodService: PaymentMethodService) { }

  ngOnInit(): void {
    this.loadDataPaymentMethods();
  }

  loadDataPaymentMethods(){
    this.paymentMethodService.getPaymentMethodList()
    .subscribe(paymentMethods=>this.paymentMethods = paymentMethods);
  }

  deletePaymentMethod(payment_method: PaymentMethod){
    this.paymentMethodService.deletePaymentMethod(payment_method.id)
    .subscribe(data=>{this.loadDataPaymentMethods();})
  }

  updatePaymentMethod(payment_method: PaymentMethod){
    this.router.navigate(['actualizar', payment_method.id]);
  }

  searchPaymentMethodById(){
    if(this.id >= 0){
      this.paymentMethodService.getPaymentMethodById(this.id)
      .subscribe(paymentMethods=>this.paymentMethods = paymentMethods);
    }
  }

  searchPaymentMethodByClient(){
    if(this.client_id >= 0){
      this.paymentMethodService.getPaymentMethodByClient(this.client_id)
      .subscribe(paymentMethods=>this.paymentMethods = paymentMethods);
    }
  }

  insertPaymentMethod(){
    this.paymentMethodService.createPaymentMethod(this.paymentMethod)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.paymentMethod = new PaymentMethod();
    this.router.navigate(['new-payment-method']);
  }
}