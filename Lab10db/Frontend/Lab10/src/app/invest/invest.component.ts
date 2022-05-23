import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss']
})
export class InvestComponent implements OnInit {

  constructor(private service: AppserviceService) { }
  readData: any;
  secData:any;
  clientData:any;
  errormsg: any;
  successmsg: any;
  createForm = true;
  editForm = false;
  selected = 'option0'
  option = 'asd'

  ngOnInit(): void {
    this.service.getInvestInfo().subscribe((res) => {
      console.log("res==> in onInit", res);
      this.readData = res;
      let a: [{ id: '' }] = this.readData;
      a.sort((a, b) => a.id > b.id ? 1 : -1) //tf..
    });

    this.service.getAllSecurInfo().subscribe((res) => {
      console.log("res==> in onInit", res);
      this.secData = res;
      let a: [{ id: '' }] = this.secData;
      a.sort((a, b) => a.id > b.id ? 1 : -1) //tf..
    });

    this.service.getAllClientsInfo().subscribe((res) => {
      console.log("res==> in onInit", res);
      this.clientData = res;
      let a: [{ id: '' }] = this.clientData;
      a.sort((a, b) => a.id > b.id ? 1 : -1) //tf..
    });
  }
  investForm = new FormGroup({
    'cid': new FormControl('', Validators.required),
    'sid': new FormControl('', Validators.required),
    'quo': new FormControl('', Validators.required),
    'purdate': new FormControl('', Validators.required),
    'saledate': new FormControl('', Validators.required)
  });

  // * Create invest form
  investSubmit() {
    if (this.investForm.valid) {
      //console.log(this.investForm.value);
      this.service.createInvest(this.investForm.value).subscribe((res) => {
        //console.log(res, 'res===>');
        this.investForm.reset();
        this.successmsg = res.message;
      })
      this.ngOnInit();
    } else {
      this.errormsg = 'Не всі поля заповнені!'
      alert('Не всі поля заповнені!')
    }

  }

  // ! DELETE by id !
  deleteInvest(id: any) {
    this.service.deleteInvest(id).subscribe((res) => {
      console.log(res,'deleteInvest===>');

      this.service.getInvestInfo().subscribe((res) => {
        //console.log(res, "res==>");
        this.readData = res;
      });
    })
  }

  //^ Edit ^
  curentItem = {
    id:'',
    cid: '',
    sid:'',
    quo:'',
    purdate:'',
    saledate:''
  }
  investSubmitUpdate()
  {
    if(this.investForm.valid){
      console.log(this.investForm.value);
      this.service.editInvest(this.curentItem).subscribe((res)=>{
        console.log('res===> on update', res);
        this.investForm.reset();
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
    this.investForm.reset();
    this.ngOnInit();
  }
  editPress(item:any){
    this.curentItem = item;
    this.createForm = false;
    this.editForm = true;
  }

}
