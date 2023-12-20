import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService } from '../../places.service';



@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  createForm: UntypedFormGroup;
  hintColor;
  timeLimit;


  constructor(private placesService: PlacesService, private fb: UntypedFormBuilder, private router: Router) {
    this.hintColor = "#76FF03";

    this.createForm = this.fb.group({
      where: '',
      find: ''

    });
  }



  findPlaces(find, where) {


    this.placesService.findPlaces(find, where).subscribe(() => {

      this.router.navigate(['/list_of_places']);

    });


  }


  ngOnInit() {
  }

}
