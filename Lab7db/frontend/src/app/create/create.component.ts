import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ApiserviceService} from "../apiservice.service"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

  clientForm = new FormGroup({
      'cName':new FormControl('', Validators.required),
      'cType':new FormControl('', Validators.required),
      'cAddress':new FormControl('', Validators.required),
      'cPhone':new FormControl('', Validators.required)
  });

  errormsg:any;
  successmsg:any;

  clientSubmit()
  {
    if(this.clientForm.valid){
      console.log(this.clientForm.value);
      this.service.createClient(this.clientForm.value).subscribe((res)=>{
        console.log(res, 'res===>');
        this.clientForm.reset();
        this.successmsg = res.message;
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!'
    }
    
  }

}
