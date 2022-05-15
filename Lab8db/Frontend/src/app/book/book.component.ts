import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(data => this.readData = data);
  }

}
