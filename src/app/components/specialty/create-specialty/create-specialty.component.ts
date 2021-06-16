import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from 'src/app/model/specialty';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-create-specialty',
  templateUrl: './create-specialty.component.html',
  styleUrls: ['./create-specialty.component.css']
})
export class CreateSpecialtyComponent implements OnInit {

  specialty: Specialty = new Specialty();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private specialtyService: SpecialtyService) { }

  ngOnInit(): void {
  }

  insertSpecialty(){
    this.specialtyService.createSpecialty(this.specialty)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.specialty = new Specialty();
    this.router.navigate(['newspecialty']);
  }
}
