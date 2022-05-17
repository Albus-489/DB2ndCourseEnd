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


  readDataClients:any;
  readDataSecur:any;

  ngOnInit(): void {
    this.service.getAllClientsInfo().subscribe((res) => {
      console.log(res, "res==> all clients");
      this.readDataClients = res;
    });

    this.service.getAllSecurInfo().subscribe((res) => {
      console.log(res, "res==> all securities");
      this.readDataSecur = res;

      //console.log(res.data[0]);
    });
  }

  investForm = new FormGroup({
    'cid': new FormControl('', Validators.required),
    'sid': new FormControl('', Validators.required),
    'quotation': new FormControl('', Validators.required),
    'dateofpurchase': new FormControl('', Validators.required),
    'dateofsale': new FormControl('', Validators.required)
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
