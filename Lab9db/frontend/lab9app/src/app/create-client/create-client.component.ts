import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ApiserviceService} from "../apiservice.service"

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

  clientForm = new FormGroup({
      'cname':new FormControl('', Validators.required),
      'ctype':new FormControl('', Validators.required),
      'caddress':new FormControl('', Validators.required),
      'cphone':new FormControl('', Validators.required)
  });

  errormsg:any;
  successmsg:any;


  clientSubmit()
  {
    if(this.clientForm.valid){
      //console.log(this.clientForm.value);
      this.service.createClient(this.clientForm.value).subscribe((res)=>{
        //console.log(res, 'res===>');
        this.clientForm.reset();
        this.successmsg = res.message;
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!'
    }

  }

}
