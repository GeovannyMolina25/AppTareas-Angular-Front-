import { Component, OnInit } from '@angular/core';
import { Header2Component } from '../../components/header2/header2.component';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [Header2Component],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  selectUser :any;
  constructor(
    private route:ActivatedRoute,
    public userService:UserService,
  ){}
  ngOnInit(): void {
      const id = this.route.snapshot.params['userName'];
      console.log(this.route.snapshot.params)
      this.getUser(id);
  }
  getUser(id:number){
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.selectUser = data;
      },
      error:(e) =>{
        console.log(e)
      }
    })
  }

}
