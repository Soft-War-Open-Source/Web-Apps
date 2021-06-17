import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { ListDietComponent } from './components/diet/list-diet/list-diet.component';
import { CreateDietComponent } from './components/diet/create-diet/create-diet.component';
import { UpdateDietComponent } from './components/diet/update-diet/update-diet.component';
import { CreateNutritionistComponent } from './components/nutritionist/create-nutritionist/create-nutritionist.component';
import { ListNutritionistComponent } from './components/nutritionist/list-nutritionist/list-nutritionist.component';
import { UpdateProfesionalProfileComponent } from './components/professional_profile/update-profesional-profile/update-profesional-profile.component';
import { CreateProfesionalProfileComponent } from './components/professional_profile/create-profesional-profile/create-profesional-profile.component';
import { ListProfesionalProfileComponent } from './components/professional_profile/list-profesional-profile/list-profesional-profile.component';
import { CreateRecipeComponent } from './components/recipe/create-recipe/create-recipe.component';
import { ListRecipeComponent } from './components/recipe/list-recipe/list-recipe.component';
import { CreateRecommendationComponent } from './components/recommendation/create-recommendation/create-recommendation.component';
import { ListRecommendationComponent } from './components/recommendation/list-recommendation/list-recommendation.component';
import { UpdateRecommendationComponent } from './components/recommendation/update-recommendation/update-recommendation.component';
import { UpdateSpecialtyComponent } from './components/specialty/update-specialty/update-specialty.component';
import { CreateSpecialtyComponent } from './components/specialty/create-specialty/create-specialty.component';
import { ListSpecialtyComponent } from './components/specialty/list-specialty/list-specialty.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBillComponent } from './components/bill/create-bill/create-bill.component';
import { UpdateBillComponent } from './components/bill/update-bill/update-bill.component';
import { ListBillComponent } from './components/bill/list-bill/list-bill.component';
import { ListPaymentMethodComponent } from './components/payment_method/list-payment-method/list-payment-method.component';
import { CreatePaymentMethodComponent } from './components/payment_method/create-payment-method/create-payment-method.component';
import { UpdatePaymentMethodComponent } from './components/payment_method/update-payment-method/update-payment-method.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenuNutritionistComponent } from './menu-nutritionist/menu-nutritionist.component';
import { AvailableNutritionistsComponent } from './components/available-nutritionists/available-nutritionists.component';
import { NutritionistSelectedComponent } from './components/nutritionist-selected/nutritionist-selected.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { UpdateNutritionistComponent } from './components/nutritionist/update-nutritionist/update-nutritionist.component';
import { PublishedRecommendationsComponent } from './components/nutritionist/published-recommendations/published-recommendations.component';
import { PublishedRecipesComponent } from './components/nutritionist/published-recipes/published-recipes.component';
import { AppointmentHistoryNutritionistComponent } from './components/nutritionist/appointment-history-nutritionist/appointment-history-nutritionist.component';
import { PendingAppointmentsComponent } from './components/nutritionist/pending-appointments/pending-appointments.component';
import { AppointmentHistoryClientComponent } from './components/client/appointment-history-client/appointment-history-client.component';
import { UpdateRecipeComponent } from './components/recipe/update-recipe/update-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    CreateDietComponent,
    ListDietComponent,
    UpdateDietComponent,
    CreateNutritionistComponent,
    ListNutritionistComponent,
    UpdateProfesionalProfileComponent,
    CreateProfesionalProfileComponent,
    ListProfesionalProfileComponent,
    CreateRecipeComponent,
    ListRecipeComponent,
    CreateRecommendationComponent,
    ListRecommendationComponent,
    UpdateRecommendationComponent,
    UpdateSpecialtyComponent,
    CreateSpecialtyComponent,
    ListSpecialtyComponent,
    CreateBillComponent,
    UpdateBillComponent,
    ListBillComponent,
    ListPaymentMethodComponent,
    CreatePaymentMethodComponent,
    UpdatePaymentMethodComponent,
    LoginComponent,
    MenuComponent,
    MenuNutritionistComponent,
    AvailableNutritionistsComponent,
    NutritionistSelectedComponent,
    NewAppointmentComponent,
    UpdateNutritionistComponent,
    PublishedRecommendationsComponent,
    PublishedRecipesComponent,
    AppointmentHistoryNutritionistComponent,
    PendingAppointmentsComponent,
    AppointmentHistoryClientComponent,
    UpdateRecipeComponent
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
