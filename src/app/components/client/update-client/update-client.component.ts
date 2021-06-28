import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number = 1;
  client: Client = new Client();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientService : ClientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
    }, error=>console.log(error));
  }

  updateClient(){
    this.clientService.updateClient(this.id, this.client)
    .subscribe(datos=>{
      console.log(datos)
      this.router.navigate(['list-clients']);
    }, error=>console.log(error));
    this.client = new Client();
  }

}
