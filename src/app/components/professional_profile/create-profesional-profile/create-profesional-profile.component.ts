import { Component, OnInit } from '@angular/core';
import { ProfessionalProfile } from 'src/app/model/professional_profile';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalProfileService } from 'src/app/services/professional-profile.service';

@Component({
  selector: 'app-create-profesional-profile',
  templateUrl: './create-profesional-profile.component.html',
  styleUrls: ['./create-profesional-profile.component.css']
})
export class CreateProfesionalProfileComponent implements OnInit {

 professionalpofile: ProfessionalProfile = new ProfessionalProfile();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private professionalpofileService: ProfessionalProfileService) { }

  ngOnInit(): void {
  }

  insertProfessionalPofile(){
    this.professionalpofileService.createProfessionalprofile(this.professionalpofile)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.professionalpofile = new ProfessionalProfile();
    this.router.navigate(['newprofessionalprofile']);
  }

}
