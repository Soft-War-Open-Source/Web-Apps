import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  id: number = 1;
  client: Client = new Client();
  clients: Client[]=[];
  constructor(private router: Router, 
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.searchClientById();
  }

  loadDataClients(){
    this.clientService.getClientList()
    .subscribe(clients=>this.clients=clients);
  }

  deleteClient(client: Client){
    this.clientService.deleteClient(client.id)
    .subscribe(data=>{this.loadDataClients();})
  }

  updateClient(client: Client){
    this.router.navigate(['update-client', client.id])//Se irá hacia el actualizar ('update')
  }

  searchClientById(){
    if(this.id == 1){
      this.clientService.getClientById(this.id)
      .subscribe(client=>this.client=client);
      this.id = 0;
    }
  }
  
}
