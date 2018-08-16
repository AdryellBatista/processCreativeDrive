import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { GlobalsServices } from './../services/globals.services';


import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {

  objForm:   FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private globalService: GlobalsServices
  )
  {
    this.objForm = formBuilder.group({
      user :   ['', Validators.required],
      senha:   ['', Validators.required],
    });
  }

  logar(){
    console.log("Tamo ai:: ", this.objForm.value);
    if(this.objForm.valid){
      if(this.globalService.logar(this.objForm.value)){
        this.router.navigate(["/starter"]);
      }else{
        alert('LOGIN deu ruim');

      }
    }else{
      alert('o form deu ruim');
    }
  }
}
