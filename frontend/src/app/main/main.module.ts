import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from '../card.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routesPages : Routes = [
  { path: 'show', component: ShowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/show', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    CardDirective,
    ShowComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesPages)
  ]
})
export class MainModule { }
