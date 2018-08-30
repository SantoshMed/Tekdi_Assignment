import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Person } from './person.model';

const BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  savePersion(resourse) {
    return this.http.post<{name: string, email: string, dob: string, avatar: string, country: string, id: number}>(BASE_URL, resourse);
  }

  getAllPerson() {
    return this.http.get(BASE_URL);
  }

  getPerson(id: string) {
    return this.http.get<{name: string, email: string, dob: string, avatar: string, country: string, id: number}>(BASE_URL + '/' + id);
  }

  updatePerson(id, data) {
    return this.http.patch<{name: string, email: string, dob: string, avatar: string, country: string, id: number}>(BASE_URL + '/' + id, data);
  }
}
