import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from '../card.directive';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routesPages : Routes = [
  { path: 'show', component: ShowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/show', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ShowComponent,
    LoginComponent,
    CardDirective,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesPages),
  ]
})
export class MainModule { }
