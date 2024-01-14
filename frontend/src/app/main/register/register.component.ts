import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  successmsg: any = "Enregistrement réussi";
  errormsg: any = "Echec de l'enregistrement";
 
  constructor(private authService : AuthService, private formBuilder : FormBuilder) {
    this.signup = this.formBuilder.group({
      user: ['', Validators.required],
      adress: ['', Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),],
      phone: ['', Validators.required, Validators.pattern('^[0-9]{10}$')],
      pass: ['', Validators.required, Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),],
    });
  }

  signup: FormGroup

  register() {
    this.authService.registerMember(this.signup.value).subscribe((res) => {
      alert(this.successmsg)
    },
    (error) => {
      alert(error.this.errormsg);
    }
    )
  }

  ngOnInit(): void {
      
  }  
}
