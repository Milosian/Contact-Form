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
  title = 'Contact Form';
  
  currentClient: Dane = {
    name: '',
    email: '',
    message: ''
  };
  
  submitted: boolean = false
  
  submitForm(form: any){
    this.submitted = true
    if(form.valid){
      console.log("Formularz został wysłany")
      console.log("Imię: ", this.currentClient.name);
      console.log("E-mail: ", this.currentClient.email)
      console.log("Wiadomość: ", this.currentClient.message)
    }else{
      this.submitted = false;
    }
  }
  clearForm(form:any){
    this.submitted = false
    form.resetForm()
  }
}
