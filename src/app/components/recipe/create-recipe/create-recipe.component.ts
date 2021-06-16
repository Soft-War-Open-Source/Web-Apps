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

  recipe: Recipe = new Recipe();
  nutritionist: Nutritionist=new Nutritionist();
  nutritionist_id: number = 1;

  constructor(private route: ActivatedRoute,private router: Router,private recipeService : RecipeService,private nutritionistService : NutritionistService) { }

  ngOnInit(): void {
  }

  assignNutritionist(id:number){
    this.nutritionistService.getNutritionistById(id).subscribe(datos=>this.nutritionist=datos,error=>console.log(error));
    console.log(this.nutritionist);
  }
  

  insertRecipe(){
    this.assignNutritionist(this.nutritionist_id);
    this.recipe.nutritionist = this.nutritionist;
    this.recipeService.createRecipe(this.recipe).subscribe(datos=>console.log(datos),error=>console.log(error));
    this.recipe = new Recipe();
    this.router.navigate(['newrecipe']);
  }

}