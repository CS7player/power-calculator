import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
 selector: 'app-calculator',
 imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
 templateUrl: './calculator.component.html',
 styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {

 equation: any = "";
 buttonData: any = [
  { name: "C" }, { name: "x" }, { name: "%" }, { name: "/" },
  { name: "7" }, { name: "8" }, { name: "9" }, { name: "*" },
  { name: "6" }, { name: "5" }, { name: "4" }, { name: "-" },
  { name: "3" }, { name: "2" }, { name: "1" }, { name: "+" },
  { name: "^" }, { name: "0" }, { name: "." }, { name: "=" }
 ];
 symbol: any = ["%", "/", "*", "-", "+", "^"];
 ngOnInit(): void {

 }

 eventHandler(event: any) {
  let name = event['name'];
  if (name == "C") {
   this.equation = "";
  } else if (name == "x") {
   this.equation = this.equation.slice(0, -1);
  } else if (name != "=") {
   if (this.symbol.includes(name)) {
    this.equation = "" + this.equation;
    this.operation();
   }
   this.equation = this.equation + name;
  } else if (name == "=") {
   this.operation();
  }
 }

 operation() {
  let arr = [...this.equation];
  let symbol = arr.filter(m => this.symbol.includes(m));
  if (symbol.length > 0) {
   let operands: any = this.equation.split(symbol[0]);
   if (operands[0].length == 0) {
    this.equation = "";
    return;
   }
   if (operands[1].length == 0) {
    this.equation = this.equation.slice(0, -1);
    return;
   }
   switch (symbol[0]) {
    case "+":
     this.equation = +operands[0] + +operands[1];
     break;
    case "-":
     this.equation = +operands[0] - +operands[1];
     break;
    case "*":
     this.equation = +operands[0] * +operands[1];
     break;
    case "^":
     this.equation = (+operands[0]) ** (+operands[1]);
     break;
    case "/":
     if (+operands[1] !== 0) {
      this.equation = +operands[0] / +operands[1];
     } else {
      this.invalidOperation();
     }
     break;
    case "%":
     if (+operands[1] !== 0) {
      this.equation = +operands[0] % +operands[1];
     } else {
      this.invalidOperation();
     }
     break;
    default:
     this.equation = "Invalid operator";
   }
  }
 }

 invalidOperation() {
  this.equation = "Error: Divide by zero";
  setTimeout(() => {
   this.equation = "";
  }, 2000);
 }
}
