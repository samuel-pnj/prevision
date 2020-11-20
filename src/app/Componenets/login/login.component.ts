import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   email:string="";
   pwd:string="";

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  botonlogin(){

      this.userService.login(this.email,this.pwd) 
      .then(response => {
        if(response.isvalid){

          this.router.navigate(['/principal']);

        } else{

          console.log('Usuario/Contraseña erroneo')
        }

      })
      .catch(error => console.log(error))    
  }

  checkTerms(){

    return this.email.length > 0 && this.pwd.length > 0;


  }


}
