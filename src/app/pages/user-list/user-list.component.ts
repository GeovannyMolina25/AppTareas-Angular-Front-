import { Component, OnInit } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [Header2Component,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  constructor(
    public userService:UserService
  )
  {}
  ngOnInit(): void {
    this.getUser();  
  }

  getUser(){
    this.userService.getUser().subscribe({
      next:(data) => {
        this.userService.users = data
      },
      error:(e) => {
        console.log(e)
      }
    })
  }
}
