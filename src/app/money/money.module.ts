import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoneyComponent} from "./money.component";
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MoneyComponent,
  }
]

@NgModule({
  declarations: [
    MoneyComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideRouter(routes)
  ]
})
export class MoneyModule {
}
