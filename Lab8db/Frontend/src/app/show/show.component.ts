import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(data => this.readData = data);
  }

  // * delete by id *
  deleteBook(id:any){
    this.service.deleteBook(id).subscribe((res)=>{
      console.log(res,'deleteBook===>');

      this.service.getAllBooks().subscribe(data => this.readData = data);
    })
  }
}
