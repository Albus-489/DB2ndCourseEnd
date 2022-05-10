import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read-invest',
  templateUrl: './read-invest.component.html',
  styleUrls: ['./read-invest.component.scss']
})
export class ReadInvestComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;
  
  ngOnInit(): void {
    this.service.getInvestInfo().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }

}
