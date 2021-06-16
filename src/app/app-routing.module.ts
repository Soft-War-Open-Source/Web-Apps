import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CreateBillComponent } from './components/bill/create-bill/create-bill.component';
import { DeleteBillComponent } from './components/bill/delete-bill/delete-bill.component';
import { UpdateBillComponent } from './components/bill/update-bill/update-bill.component';
import { ListBillComponent } from './components/bill/list-bill/list-bill.component';
import { FindBillComponent } from './components/bill/find-bill/find-bill.component';
import { FindPaymentMethodComponent } from './components/payment_method/find-payment-method/find-payment-method.component';
import { ListPaymentMethodComponent } from './components/payment_method/list-payment-method/list-payment-method.component';
import { CreatePaymentMethodComponent } from './components/payment_method/create-payment-method/create-payment-method.component';
import { UpdatePaymentMethodComponent } from './components/payment_method/update-payment-method/update-payment-method.component';
import { DeletePaymentMethodComponent } from './components/payment_method/delete-payment-method/delete-payment-method.component';

const routes: Routes = [
  {path: '', redirectTo:'client', pathMatch:'full'},
  {path: 'list-clients', component: ListClientComponent},
  {path: 'new-client', component: CreateClientComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'search-client', component: FindClientComponent},
  {path: 'delete-client', component: DeleteClientComponent},

  {path: '', redirectTo:'appointment', pathMatch:'full'},
  {path: 'list-appointments', component: ListAppointmentComponent},
  {path: 'new-appointment', component: CreateAppointmentComponent},
  {path: 'update-appointment/:id', component: UpdateAppointmentComponent},
  {path: 'search-appointment', component: FindAppointmentComponent},
  {path: 'delete-appointment', component: DeleteAppointmentComponent},

  {path: '', redirectTo:'diet', pathMatch:'full'},
  {path: 'list-diets', component: ListDietComponent},
  {path: 'new-diet', component: CreateDietComponent},
  {path: 'update-diet/:id', component: UpdateDietComponent},
  {path: 'search-diet', component: FindDietComponent},
  {path: 'delete-diet', component: DeleteDietComponent},

  {path: '', redirectTo:'nutritionist', pathMatch:'full'},
  {path: 'list-nutritionists', component: ListNutritionistComponent},
  {path: 'new-nutritionist', component: CreateNutritionistComponent},
  {path: 'update-nutritionist/:id', component: UpdateNutritionistComponent},
  {path: 'search-nutritionist', component: FindNutritionistComponent},
  {path: 'delete-nutritionist', component: DeleteNutritionistComponent},

  {path: '', redirectTo:'profesional_profile', pathMatch:'full'},
  {path: 'listprofessionalprofiles', component: ListClientComponent},
  {path: 'newprofessionalprofile', component: CreateProfesionalProfileComponent},
  {path: 'updateprofessionalprofile/:id', component: UpdateClientComponent},
  {path: 'searchprofessionalprofile', component: FindClientComponent},
  {path: 'deleteprofessionalprofile', component: DeleteAppointmentComponent},

  {path: '', redirectTo:'recipe', pathMatch:'full'},
  {path: 'listclients', component: ListClientComponent},
  {path: 'newclient', component: CreateClientComponent},
  {path: 'updateclient/:id', component: UpdateClientComponent},
  {path: 'searchclient', component: FindClientComponent},
  {path: 'deleteappointment', component: DeleteAppointmentComponent},

  {path: '', redirectTo:'recommendation', pathMatch:'full'},
  {path: 'listclients', component: ListClientComponent},
  {path: 'newclient', component: CreateClientComponent},
  {path: 'updateclient/:id', component: UpdateClientComponent},
  {path: 'searchclient', component: FindClientComponent},
  {path: 'deleteappointment', component: DeleteAppointmentComponent},

  {path: '', redirectTo:'specialty', pathMatch:'full'},
  {path: 'listspecialty', component: ListSpecialtyComponent},
  {path: 'newspecialty', component: CreateSpecialtyComponent},
  {path: 'updatespecialty/:id', component: UpdateSpecialtyComponent},
  {path: 'searchclient', component: FindClientComponent},
  {path: 'deleteappointment', component: DeleteAppointmentComponent},

  {path: '', redirectTo:'bill', pathMatch:'full'},
  {path: 'list-bills', component: ListBillComponent},
  {path: 'new-bill', component: CreateBillComponent},
  {path: 'update-bill/:id', component: UpdateBillComponent},
  {path: 'search-bill', component: FindBillComponent},
  {path: 'delete-bill', component: DeleteBillComponent},

  {path: '', redirectTo:'payment-method', pathMatch:'full'},
  {path: 'list-payment-methods', component: ListPaymentMethodComponent},
  {path: 'new-payment-method', component: CreatePaymentMethodComponent},
  {path: 'update-payment-method/:id', component: UpdatePaymentMethodComponent},
  {path: 'search-payment-method', component: FindPaymentMethodComponent},
  {path: 'delete-payment-method', component: DeletePaymentMethodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
