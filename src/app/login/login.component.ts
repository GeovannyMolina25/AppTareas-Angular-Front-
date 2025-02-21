import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CheckboxModule] 
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      city: new FormControl(false) 
    });
  }

  login() {
    console.log('Checkbox seleccionado:', this.formGroup.value.city);
  }
}
