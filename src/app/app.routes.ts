import { Routes } from '@angular/router';

export const routes: Routes = [
 { path: "", redirectTo: "calculator", pathMatch: "full" },
 { path: "calculator", loadComponent: () => import("./calculator/calculator.component").then((m) => m.CalculatorComponent) },
 { path: "age", loadComponent: () => import("./age/age.component").then((m) => m.AgeComponent) },
];
