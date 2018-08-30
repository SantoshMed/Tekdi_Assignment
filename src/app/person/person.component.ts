import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.getAllPerson()
      .subscribe(response => {
        this.person = response;
      });
  }

}
