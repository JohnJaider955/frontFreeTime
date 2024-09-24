import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedOption: string = '';
  onSubmit(registerForm: NgForm) {
    const selectedOption = registerForm.value.quiz;

    if (selectedOption === "1") {
      window.location.href = '/form-terminos';
    } else if (selectedOption === "2") {
      window.location.href = '/form-freetimer';
    } else if (selectedOption === "3") {
      window.location.href = '/form-freetimer-fulltimer';
    } else {
      alert('Por favor, selecciona una opción.');
    }
  }
}
