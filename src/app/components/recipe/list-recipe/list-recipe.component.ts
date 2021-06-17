import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  name: string='';
  recipes: Recipe[]=[];


  constructor(private router: Router,
     private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.loadDataRecipes();
  }

  loadDataRecipes(){
    this.recipeService.getRecipeList()
    .subscribe(recipes=>this.recipes=recipes);
  }

  deleteRecipe(recipe: Recipe){
    this.recipeService.deleteRecipe(recipe.id)
    .subscribe(data=>{this.loadDataRecipes();})
  }

  updateRecipe(recipe:Recipe){
    this.router.navigate(['update-recipe',recipe.id]);
  }

  searchRecipeByName(){
    if(this.name.length!=0){
      this.recipeService.getRecipeByName(this.name)
      .subscribe(recipes=>this.recipes=recipes);
    } 
    else{
      this.loadDataRecipes();
    }
  }
}