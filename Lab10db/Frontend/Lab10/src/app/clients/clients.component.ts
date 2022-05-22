import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private service: AppserviceService) { }
  readData: any;
  errormsg: any;
  successmsg: any;
  createForm = true;
  editForm = false;

  ngOnInit(): void {
    this.service.getAllClientsInfo().subscribe((res) => {
      console.log("res==> in onInit", res);
      this.readData = res;
      let a: [{ id: '' }] = this.readData;
      a.sort((a, b) => a.id > b.id ? 1 : -1) //tf..
    });
  }

  clientForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'type': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required)
  });

  clientSubmit() {
    if (this.clientForm.valid) {
      //console.log(this.clientForm.value);
      this.service.createClient(this.clientForm.value).subscribe((res) => {
        //console.log(res, 'res===>');
        this.clientForm.reset();
        this.successmsg = res.message;
      })
      this.ngOnInit();
    } else {
      this.errormsg = 'Не всі поля заповнені!'
    }

  }
  // ! delete by id !
  deleteClient(id: any) {
    this.service.deleteClient(id).subscribe((res) => {
      console.log(res,'deleteClient===>');

      this.service.getAllClientsInfo().subscribe((res) => {
        //console.log(res, "res==>");
        this.readData = res;
      });
    })
  }

  // ^ Edit ^
  curentItem = {
    id:'',
    name:'',
    type:'',
    address:'',
    phone:''
  }
  clientSubmitUpdate()
  {
    if(this.clientForm.valid){
      console.log(this.clientForm.value);
      this.service.editClients(this.curentItem).subscribe((res)=>{
        console.log('res===> on update', res);
        this.clientForm.reset();
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
    this.clientForm.reset();
    this.ngOnInit();
  }
  editPress(item:any){
    this.curentItem = item;
    this.createForm = false;
    this.editForm = true;
  }
}
