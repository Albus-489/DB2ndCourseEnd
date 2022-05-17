import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-secur',
  templateUrl: './show-secur.component.html',
  styleUrls: ['./show-secur.component.scss']
})
export class ShowSecurComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;
  tableShow = true;
  editShow = false;
  errormsg:any;
  successmsg:any;

  securForm = new FormGroup({
    'minimumamount':new FormControl('', Validators.required),
    'rating':new FormControl('', Validators.required),
    'profitability':new FormControl('', Validators.required),
    'additionalinfo':new FormControl('', Validators.required)
});

  curentItem = {
    id:'',
    minimumamount:'',
    rating:'',
    profitability:'',
    additionalinfo:''
  }

  ngOnInit(): void {
    this.service.getAllSecurInfo().subscribe((res) => {
      console.log("res==> in onInit", res);
      this.readData = res;
      let a:[{id: ''}] = this.readData;
      a.sort((a, b) => a.id > b.id ? 1 : -1) //tf..
    });
  }

  editPress(item:any){
    this.curentItem = item;
    this.editShow = true;
    this.tableShow = false;
    console.log('Edit press ==>' + this.curentItem.id);
  }

  securSubmit()
  {
    if(this.securForm.valid){
      console.log(this.securForm.value);
      this.service.editSecur(this.curentItem).subscribe((res)=>{
        console.log('res===> on update', res);
        this.securForm.reset();
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
  deleteSecur(id:any){
    this.service.deleteSecur(id).subscribe((res)=>{
      //console.log(res,'deleteSecur===>');
      this.ngOnInit();
    })
  }

}
