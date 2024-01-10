import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successmsg: any = "Enregistrement réussi";
  errormsg: any = "Echec de l'enregistrement";

  login: FormGroup
  
  constructor(private authService : AuthService, private formBuilder : FormBuilder) {
    this.login = this.formBuilder.group({
      adress: [
        '',
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ],
      pass: [
        '',
        Validators.required,
        Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
      ],
    });
  }

  connect() {
    const { adress, pass } = this.login.value;

    this.authService.connectMember(adress, pass).subscribe((res) => {
      alert(this.successmsg);
    },
    (error) => {
      alert(this.errormsg);
    }
    )
  }

  ngOnInit(): void {
      
  }
}
