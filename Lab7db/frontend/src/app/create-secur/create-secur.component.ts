import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiserviceService } from "../apiservice.service"

@Component({
  selector: 'app-create-secur',
  templateUrl: './create-secur.component.html',
  styleUrls: ['./create-secur.component.scss']
})
export class CreateSecurComponent implements OnInit {
  
  constructor(private service: ApiserviceService) { }
  
  ngOnInit(): void {
  }

  securForm = new FormGroup({
    'MinimumAmount': new FormControl('', Validators.required),
    'Rating': new FormControl('', Validators.required),
    'Profitability': new FormControl('', Validators.required),
    'AdditionalInfo': new FormControl('', Validators.required)
  });

  errormsg: any;
  successmsg: any;

  securSubmit()
  {
    if(this.securForm.valid){
      console.log(this.securForm.value);
      this.service.createSecur(this.securForm.value).subscribe((res)=>{
        console.log(res, 'res===>');
        this.securForm.reset();
        this.successmsg = res.message;
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!'
    }
    
  }
}
