import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() name:string="";
  @Output()
  login: EventEmitter<any> = new EventEmitter<any>
  userName: string ;
  MyNumber: number;
  
  constructor(){

    this.userName = 'Nelson Molina'
    this.MyNumber = 10;
  }
  
}
