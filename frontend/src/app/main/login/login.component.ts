import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  successmsg: any = 'Succès de la connexion';
  errormsg: any = 'Echec de la connexion';

  login: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.login = this.formBuilder.group({
      adress: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
        ],
      ],
      pass: ['', Validators.required],
    });
  }

  connect() {
    const adress = this.login.get('adress')?.value;
    const pass = this.login.get('pass')?.value;

    if (adress && pass) {
      this.authService.connectMember(adress, pass).subscribe(
        (res) => {
          alert(this.successmsg);
        },
        (error) => {
          alert(this.errormsg);
        }
      );
    } else {
      console.error("L'adresse et le mot de passe sont requis.");
    }
  }

  ngOnInit(): void {}
}

