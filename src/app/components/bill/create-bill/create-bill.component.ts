import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Bill } from 'src/app/model/bill';
import { ClientService } from 'src/app/services/client.service';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {

  client_id: number = 1;
  bills: Bill[]=[];
  clients: Client[]=[];

  constructor(private router: Router,
    private billService: BillService,
    private clientService : ClientService) { }

  
  ngOnInit(): void {
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
    this.router.navigate(['list-bills']);
  }
}
