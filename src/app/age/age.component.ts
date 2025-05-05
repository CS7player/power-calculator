import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
 selector: 'app-age',
 imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
 templateUrl: './age.component.html',
 styleUrl: './age.component.css'
})
export class AgeComponent {
 selectedDate: Date | null = null;
 age: any;

 onDateChanged(event: any) {
  const birthDate = new Date(event.value);
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
   months--;
   const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
   days += prevMonth.getDate();
  }
  if (months < 0) {
   years--;
   months += 12;
  }
  this.age = `${years}y ${months}m ${days}d older`;
 }

}
