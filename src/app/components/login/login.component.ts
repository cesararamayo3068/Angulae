import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
  
 constructor(private fb:FormBuilder) { 
   this.form=this.fb.group({
     usuario:['',Validators.required],
     password:['',Validators.required]

   })
 }

  ngOnInit(): void {
  }

  ingresar(){
    
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    if(usuario=='jperez' && password=='admin123'){
      //redireccionamos al dashboard
    } else {
     //mostra un mensaje de error;
    }
    }

  }

