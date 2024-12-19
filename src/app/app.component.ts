import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Dane{
  name: string
  email: string
  message: string
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formularz kontaktowy';
  
  currentClient: Dane;
  constructor(){
     this.currentClient = {
      name: '',
      email: '',
      message: ''
     }
  }
  inputValue: string = "";
  emailInput: string = "";
  messageInput: string = "";
  submitted: boolean = false
  submitForm(){
    this.submitted = true;
  }
  clearForm(){
    this.currentClient.name = "";
    this.currentClient.email = "";
    this.currentClient.message = "";
  }
}
