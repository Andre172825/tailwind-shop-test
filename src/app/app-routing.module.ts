import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/pages/main/main.component';
import { MainV2Component } from './core/pages/main-v2/main-v2.component';
import { MainV3Component } from './main-v3/main-v3.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main-v2', component: MainV2Component },
  { path: 'main-v3', component: MainV3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
