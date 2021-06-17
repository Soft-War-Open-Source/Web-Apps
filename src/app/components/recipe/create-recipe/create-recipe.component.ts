import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipes: Recipe[]=[];
  nutritionists: Nutritionist[]=[];
  nutritionist_id: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService : RecipeService,
    private nutritionistService : NutritionistService) {
    }

  ngOnInit(): void {
    this.recipes.push(new Recipe());
    this.assignNutritionist();
  }

  assignNutritionist(){
    this.nutritionistService.getNutritionistById(this.nutritionist_id)
    .subscribe(datos=>this.nutritionists.push(datos));
  }
  
  insertRecipe(){
    this.recipes[0].nutritionist = this.nutritionists[0];
    this.recipeService.createRecipe(this.recipes[0])
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.recipes = [];
    this.nutritionists = [];
    this.router.navigate(['published-recipes']);
  }

}