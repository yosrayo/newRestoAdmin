import { Component, OnInit } from '@angular/core';
//import { AuthService } from  '../services/auth.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;


  constructor(private router: Router) { }
  
 
  ngOnInit(): void {
  }
  login(): void {
    if (this.username == 'admin@admin.com' && this.password == 'admin123') {
       this.router.navigate(["gestion"]);
    } else {
       alert("coordonnées admin non valide ");
    }
 }

}
