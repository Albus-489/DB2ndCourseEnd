import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'
@Component({
  selector: 'app-show-invest',
  templateUrl: './show-invest.component.html',
  styleUrls: ['./show-invest.component.scss']
})
export class ShowInvestComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData: any;
  tableShow = true;
  editShow = false;
  errormsg: any;
  successmsg: any;

  investForm = new FormGroup({
    'cid': new FormControl('', Validators.required),
    'sid': new FormControl('', Validators.required),
    'quotation': new FormControl('', Validators.required),
    'dateofpurchase': new FormControl('', Validators.required),
    'dateofsale': new FormControl('', Validators.required)
  });

  curentItem = {
    id: '',
    cid: '',
    sid: '',
    quotation: '',
    dateofpurchase: '',
    dateofsale: ''
  }

  readDataClients:any;
  readDataSecur:any;

  ngOnInit(): void {
    this.service.getInvestInfo().subscribe((res) => {
      //console.log(res, "res==>");
      this.readData = res;
    });

    this.service.getAllClientsInfo().subscribe((res) => {
      //console.log(res, "res==> all clients");
      this.readDataClients = res;
    });

    this.service.getAllSecurInfo().subscribe((res) => {
      //console.log(res, "res==> all securities");
      this.readDataSecur = res;

      //console.log(res.data[0]);
    });
  }

  editPress(item:any){
    this.curentItem = item;
    this.editShow = true;
    this.tableShow = false;
    //console.log('Edit press ==>' + this.curentItem.id);
  }

  investSubmit()
  {
    if(this.investForm.valid){
      console.log(this.investForm.value);
      this.service.editInvest(this.curentItem).subscribe((res)=>{
        console.log('res===> on update', res);
        this.investForm.reset();
        this.successmsg = res.message;
        this.editShow = false;
        this.tableShow = true;
        this.ngOnInit();
      })
    }else{
      this.errormsg = 'Не всі поля заповнені!'
    }

  }

  // * delete by id *
  deleteInvest(id: any) {
    this.service.deleteInvest(id).subscribe((res) => {
      console.log(res, 'deleteInvest===>');

      this.ngOnInit();
    })
  }

}
