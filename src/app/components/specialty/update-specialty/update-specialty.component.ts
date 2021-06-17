import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from 'src/app/model/specialty';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-update-specialty',
  templateUrl: './update-specialty.component.html',
  styleUrls: ['./update-specialty.component.css']
})
export class UpdateSpecialtyComponent implements OnInit {

  id: number = 1;
  specialty: Specialty= new Specialty();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private specialtyService : SpecialtyService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.specialtyService.getSpecialtyById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.specialty = datos;
    }, error=>console.log(error));
  }

  updateSpecialty(){
    this.specialtyService.updateSpecialty(this.id, this.specialty)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['list-nutritionists']);
    }, error=>console.log(error));
    this.specialty = new Specialty();
  }

}
