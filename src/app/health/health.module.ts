import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HealthComponent} from "./health.component";
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HealthComponent,
  }
]

@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideRouter(routes)
  ]
})
export class HealthModule {
}
