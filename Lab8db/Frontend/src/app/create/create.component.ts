import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiserviceService } from "../apiservice.service"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  bookForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'author': new FormControl('', Validators.required),
    'year': new FormControl('', Validators.required),
    'genre': new FormControl('', Validators.required)
  });

  errormsg: any;
  successmsg: any;

  ngOnInit(): void {
  }

  bookSubmit()
  {
    if(this.bookForm.valid){
      console.log(this.bookForm.value);
      this.service.createBook(this.bookForm.value).subscribe((res)=>{
        console.log(res, 'res===>');
        this.bookForm.reset();
        this.successmsg = res.message;
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!'
    }

  }

}
