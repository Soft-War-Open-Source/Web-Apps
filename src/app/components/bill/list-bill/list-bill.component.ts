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
  client: Client = new Client();
  bills2: Bill[]=[];

  constructor(private router: Router,
    private billService: BillService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.assignClient();
    this.loadDataBills();
  }

  assignClient(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
    }, error=>console.log(error));
  }

  loadDataBills(){
    this.billService.getBillByClient(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.bills2 = datos;
    }, error=>console.log(error));
  }
}
