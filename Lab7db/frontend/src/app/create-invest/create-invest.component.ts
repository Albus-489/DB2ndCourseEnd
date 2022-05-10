import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiserviceService } from "../apiservice.service"

@Component({
  selector: 'app-create-invest',
  templateUrl: './create-invest.component.html',
  styleUrls: ['./create-invest.component.scss']
})
export class CreateInvestComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  ngOnInit(): void {
  }

  investForm = new FormGroup({
    'cID': new FormControl('', Validators.required),
    'SecuritiesID': new FormControl('', Validators.required),
    'quotation': new FormControl('', Validators.required),
    'purchaseDate': new FormControl('', Validators.required),
    'saleDate': new FormControl('', Validators.required)
  });

  errormsg:any;
  successmsg:any;

  investSubmit()
  {
    if(this.investForm.valid){
      console.log(this.investForm.value);
      this.service.createInvest(this.investForm.value).subscribe((res)=>{
        console.log(res, 'res===>');
        this.investForm.reset();
        this.successmsg = res.message;
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!';
      console.log(this.investForm.value);
    }
    
  }

}
