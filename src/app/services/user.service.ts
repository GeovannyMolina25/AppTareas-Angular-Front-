import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = "https://jsonplaceholder.typicode.com/users"
  users: any[];
  constructor(private http: HttpClient) {
    this.users = [];
   }

   getUser(){
    return this.http.get<any[]>(this.API_URL);
   }
   getUserid(id:number){
    return this.http.get<any>(`${this.API_URL}/${id}`);
   }
}
