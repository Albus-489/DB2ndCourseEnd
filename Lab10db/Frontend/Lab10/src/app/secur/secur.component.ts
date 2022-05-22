import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-secur',
  templateUrl: './secur.component.html',
  styleUrls: ['./secur.component.scss']
})
export class SecurComponent implements OnInit {

  constructor(private service: AppserviceService) { }
  readData: any;
  errormsg: any;
  successmsg: any;
  createForm = true;
  editForm = false;

  ngOnInit(): void {
    this.service.getAllSecurInfo().subscribe((res) => {
      console.log("res==> in onInit", res);
      this.readData = res;
      let a: [{ id: '' }] = this.readData;
      a.sort((a, b) => a.id > b.id ? 1 : -1) //tf..
    });
  }
  securForm = new FormGroup({
    'minamount': new FormControl('', Validators.required),
    'profit': new FormControl('', Validators.required),
    'rating': new FormControl('', Validators.required),
    'info': new FormControl('', Validators.required)
  });

  securSubmit() {
    if (this.securForm.valid) {
      //console.log(this.securForm.value);
      this.service.createSecur(this.securForm.value).subscribe((res) => {
        //console.log(res, 'res===>');
        this.securForm.reset();
        this.successmsg = res.message;
      })
      this.ngOnInit();
    } else {
      this.errormsg = 'Не всі поля заповнені!'
      alert('Не всі поля заповнені!')
    }

  }

  // ! DELETE by id !
  deleteSecur(id: any) {
    this.service.deleteSecur(id).subscribe((res) => {
      console.log(res,'deleteClient===>');

      this.service.getAllSecurInfo().subscribe((res) => {
        //console.log(res, "res==>");
        this.readData = res;
      });
    })
  }

  //^ Edit ^
  curentItem = {
    id:'',
    minamount:'',
    profit:'',
    rating:'',
    info:''
  }
  securSubmitUpdate()
  {
    if(this.securForm.valid){
      console.log(this.securForm.value);
      this.service.editSecur(this.curentItem).subscribe((res)=>{
        console.log('res===> on update', res);
        this.securForm.reset();
        this.successmsg = res.message;
        this.editForm = false;
        this.createForm = true;
        this.ngOnInit();
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!'
      alert('Не всі поля заповнені!')
    }

  }

  goBack(){
    this.createForm = true;
    this.editForm = false;
    this.securForm.reset();
    this.ngOnInit();
  }
  editPress(item:any){
    this.curentItem = item;
    this.createForm = false;
    this.editForm = true;
  }

}
