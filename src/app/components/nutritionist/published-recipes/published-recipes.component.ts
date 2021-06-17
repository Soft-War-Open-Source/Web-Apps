import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-published-recipes',
  templateUrl: './published-recipes.component.html',
  styleUrls: ['./published-recipes.component.css']
})
export class PublishedRecipesComponent implements OnInit {

  lastName: string ='';
  nutritionist_id: number = 0;
  recipes: Recipe[]=[];

  constructor(private router: Router,
     private recipeService: RecipeService) { }

  ngOnInit(): void {
    //this.loadDataRecipes();
  }
  /*
  loadDataRecipes(){
    this.recipeService.getRecipeByNutritionist(this.nutritionist_id)
    .subscribe(recipes=>this.recipes=recipes);
  }

  deleteRecipe(id: number){
    this.customerService.deleteCustomer(customer.id)
    .subscribe(data=>{this.loadDataCustomers();})
  }

  updateCustomer(customer: Customer){
    this.router.navigate(['update', customer.id])//Se irá hacia el actualizar ('update')
  }

  searchCustomerByLastName(){
    if(this.lastName.length!=0){
      this.customerService.getCustomerByLastName(this.lastName)
      .subscribe(customers=>this.customers=customers);
    }
    else
      this.loadDataCustomers();
  }
  */
}
