import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { Bill } from 'src/app/model/bill';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css']
})
export class ListBillComponent implements OnInit {

  client_id: number = 1;
  clients: Client[]=[]
  bills: Bill[]=[];
  bills2: Bill[]=[];

  constructor(private router: Router,
    private billService: BillService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.bills.push(new Bill());
    this.assignClient();
    this.loadDataBills();
  }

  loadDataBills(){
    this.billService.getBillByClient(this.client_id)
    .subscribe(bills2=>this.bills2 = bills2);
  }

  deleteBill(bill: Bill){
    this.billService.deleteBill(bill.id)
    .subscribe(data=>{this.loadDataBills();})
  }

  updateBill(bill: Bill){
    this.router.navigate(['actualizar', bill.id]); //cambiar enlace update
  }

  assignClient(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>this.clients.push(datos));
  }

  insertBill(){
    this.bills[0].client = this.clients[0];
    this.billService.createBill(this.bills[0])
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.bills = [];
    this.clients = [];
    this.router.navigate(['list-payment-methods']);
  }
}
