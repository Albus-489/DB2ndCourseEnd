import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss']
})
export class ShowClientComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;
  tableShow = true;
  editShow = false;
  errormsg:any;
  successmsg:any;

  clientForm = new FormGroup({
    'cname':new FormControl('', Validators.required),
    'ctype':new FormControl('', Validators.required),
    'caddress':new FormControl('', Validators.required),
    'cphone':new FormControl('', Validators.required)
});

  curentItem = {
    id:'',
    cname:'',
    ctype:'',
    caddress:'',
    cphone:''
  }

  ngOnInit(): void {
    this.service.getAllClientsInfo().subscribe((res) => {
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
    //console.log('Edit press ==>' + this.curentItem.id);
  }

  clientSubmit()
  {
    if(this.clientForm.valid){
      console.log(this.clientForm.value);
      this.service.editClients(this.curentItem).subscribe((res)=>{
        console.log('res===> on update', res);
        this.clientForm.reset();
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
  deleteClient(id:any){
    this.service.deleteClient(id).subscribe((res)=>{
      //console.log(res,'deleteClient===>');

      this.service.getAllClientsInfo().subscribe((res) => {
        //console.log(res, "res==>");
        this.readData = res;
      });
    })
  }

}
