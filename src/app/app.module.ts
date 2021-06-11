import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAppointmentComponent } from './components/appointment/create-appointment/create-appointment.component';
import { ListAppointmentComponent } from './components/appointment/list-appointment/list-appointment.component';
import { UpdateAppointmentComponent } from './components/appointment/update-appointment/update-appointment.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { DeleteClientComponent } from './components/client/delete-client/delete-client.component';
import { FindClientComponent } from './components/client/find-client/find-client.component';
import { FindAppointmentComponent } from './components/appointment/find-appointment/find-appointment.component';
import { DeleteAppointmentComponent } from './components/appointment/delete-appointment/delete-appointment.component';
import { ListDietComponent } from './components/diet/list-diet/list-diet.component';
import { CreateDietComponent } from './components/diet/create-diet/create-diet.component';
import { UpdateDietComponent } from './components/diet/update-diet/update-diet.component';
import { DeleteDietComponent } from './components/diet/delete-diet/delete-diet.component';
import { FindDietComponent } from './components/diet/find-diet/find-diet.component';
import { FindNutritionistComponent } from './components/nutritionist/find-nutritionist/find-nutritionist.component';
import { CreateNutritionistComponent } from './components/nutritionist/create-nutritionist/create-nutritionist.component';
import { DeleteNutritionistComponent } from './components/nutritionist/delete-nutritionist/delete-nutritionist.component';
import { ListNutritionistComponent } from './components/nutritionist/list-nutritionist/list-nutritionist.component';
import { UpdateNutritionistComponent } from './components/nutritionist/update-nutritionist/update-nutritionist.component';
import { UpdateProfesionalProfileComponent } from './components/professional_profile/update-profesional-profile/update-profesional-profile.component';
import { CreateProfesionalProfileComponent } from './components/professional_profile/create-profesional-profile/create-profesional-profile.component';
import { ListProfesionalProfileComponent } from './components/professional_profile/list-profesional-profile/list-profesional-profile.component';
import { DeleteProfesionalProfileComponent } from './components/professional_profile/delete-profesional-profile/delete-profesional-profile.component';
import { FindProfesionalProfileComponent } from './components/professional_profile/find-profesional-profile/find-profesional-profile.component';
import { FindRecipeComponent } from './components/recipe/find-recipe/find-recipe.component';
import { CreateRecipeComponent } from './components/recipe/create-recipe/create-recipe.component';
import { DeleteRecipeComponent } from './components/recipe/delete-recipe/delete-recipe.component';
import { ListRecipeComponent } from './components/recipe/list-recipe/list-recipe.component';
import { UpdateRecipeComponent } from './components/recipe/update-recipe/update-recipe.component';
import { CreateRecommendationComponent } from './components/recommendation/create-recommendation/create-recommendation.component';
import { ListRecommendationComponent } from './components/recommendation/list-recommendation/list-recommendation.component';
import { UpdateRecommendationComponent } from './components/recommendation/update-recommendation/update-recommendation.component';
import { FindRecommendationComponent } from './components/recommendation/find-recommendation/find-recommendation.component';
import { DeleteRecommendationComponent } from './components/recommendation/delete-recommendation/delete-recommendation.component';
import { DeleteSpecialtyComponent } from './components/specialty/delete-specialty/delete-specialty.component';
import { UpdateSpecialtyComponent } from './components/specialty/update-specialty/update-specialty.component';
import { CreateSpecialtyComponent } from './components/specialty/create-specialty/create-specialty.component';
import { ListSpecialtyComponent } from './components/specialty/list-specialty/list-specialty.component';
import { FindSpecialtyComponent } from './components/specialty/find-specialty/find-specialty.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateAppointmentComponent,
    ListAppointmentComponent,
    UpdateAppointmentComponent,
    CreateClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    FindClientComponent,
    FindAppointmentComponent,
    DeleteAppointmentComponent,
    CreateDietComponent,
    ListDietComponent,
    UpdateDietComponent,
    DeleteDietComponent,
    FindDietComponent,
    FindNutritionistComponent,
    CreateNutritionistComponent,
    DeleteNutritionistComponent,
    ListNutritionistComponent,
    UpdateNutritionistComponent,
    UpdateProfesionalProfileComponent,
    CreateProfesionalProfileComponent,
    ListProfesionalProfileComponent,
    DeleteProfesionalProfileComponent,
    FindProfesionalProfileComponent,
    FindRecipeComponent,
    CreateRecipeComponent,
    DeleteRecipeComponent,
    ListRecipeComponent,
    UpdateRecipeComponent,
    CreateRecommendationComponent,
    ListRecommendationComponent,
    UpdateRecommendationComponent,
    FindRecommendationComponent,
    DeleteRecommendationComponent,
    DeleteSpecialtyComponent,
    UpdateSpecialtyComponent,
    CreateSpecialtyComponent,
    ListSpecialtyComponent,
    FindSpecialtyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
