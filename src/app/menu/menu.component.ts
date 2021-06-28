import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  client_id: number = 1;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  listRecipes(){
    this.router.navigate(['list-recipes', this.client_id])
  }
}
