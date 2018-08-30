import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PersonService } from './../person.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  isLoading: boolean;
  btnText = 'Submit';
  mode = 'create';
  personId: string;
  form: FormGroup;

  constructor(fb: FormBuilder, private service: PersonService, private route: ActivatedRoute, private router: Router) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.btnText = 'Save';
        this.personId = paramMap.get('id');
        this.service.getPerson(this.personId)
          .subscribe(response => {
            this.form.setValue({
              name: response.name,
              email: response.email,
              dob: response.dob,
              avatar: response.avatar,
              country: response.country
            });
          });
      } else {
        this.mode = 'create';
        this.personId = '';
      }
    });

  }

  onSavePost() {
    if (this.mode === 'create') {
      this.form.value.dob = this.formatDate(this.form.value.dob);
      this.service.savePersion(this.form.value)
        .subscribe(response => {
          if (response.id) {
            this.router.navigate(['/']);
          }
        });
    } else {
      this.service.updatePerson(this.personId, this.form.value)
        .subscribe(response => {
          if (response.id) {
            this.router.navigate(['/']);
          }
        });
    }
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get dob() { return this.form.get('dob'); }
  get avatar() { return this.form.get('avatar'); }
  get country() { return this.form.get('country'); }

  private formatDate(date) {
    const month = date.getMonth() + 1;
    return date.getFullYear() + '-' + month + '-' + date.getDate();
  }

}
