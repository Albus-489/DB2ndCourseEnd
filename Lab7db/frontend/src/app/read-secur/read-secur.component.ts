import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-read-secur',
  templateUrl: './read-secur.component.html',
  styleUrls: ['./read-secur.component.scss']
})
export class ReadSecurComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getAllSecurInfo().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }

  // * delete by id *
  deleteSecur(id:any){
    this.service.deleteSecur(id).subscribe((res)=>{
      console.log(res,'deleteSecur===>');

      this.service.getAllSecurInfo().subscribe((res) => {
        console.log(res, "res==>");
        this.readData = res.data;
      });
    })
  }

}
