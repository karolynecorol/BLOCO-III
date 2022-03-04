import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../model/Login';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  login: Login = new Login ()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }



  entrar() {
    this.authService.entrar (this.login).subscribe ({
      next: (resp: Login) => {
        this.login = resp

        environment.id = this.login.id;
        environment.nome = this.login.nome;
        environment.foto = this.login.foto;
        environment.token = this.login.token;
        environment.tipo = this.login.tipo

      this.router.navigate(["/inicio"])
      },

      error: erro => {
        if (erro.status == 401) {
          alert ("usuario e/ou senha estão incorretos")
        }
      }

    })

  }
}
