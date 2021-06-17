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
  nutritionist_id: number = 1;
  recipes: Recipe[]=[];

  constructor(private router: Router,
     private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.loadDataRecipes();
  }
  
  loadDataRecipes(){
    this.recipeService.getRecipeByNutritionist(this.nutritionist_id)
    .subscribe(recipes=>this.recipes=recipes);
  }

  deleteRecipe(id: number){
    this.recipeService.deleteRecipe(id)
    .subscribe(data=>{this.loadDataRecipes();})
  }

  updateRecipe(recipe: Recipe){
    this.router.navigate(['update-recipe', recipe.id])
  }

  insertRecipe(){
    this.router.navigate(['new-recipe'])
  }
}
