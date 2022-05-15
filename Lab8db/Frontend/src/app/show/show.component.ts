import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  // ? ЗМІННІ ?
  bookForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'author': new FormControl('', Validators.required),
    'year': new FormControl('', Validators.required),
    'genre': new FormControl('', Validators.required)
  });

  readData:any;
  tableShow = true;
  editShow = false;
  errormsg: any;
  successmsg: any;

  curentItem = {
    _id:'',
    name:'',
    author:'',
    year:'',
    genre:''
  }
  //? ******* ?

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(data => this.readData = data);
  }


  editPress(book:any){
    this.curentItem = book;
    this.editShow = true;
    this.tableShow = false;
  }

  bookSubmit()
  {
    if(this.bookForm.valid){
      console.log(this.bookForm.value);
      this.service.editBook(this.curentItem).subscribe((res)=>{
        console.log(res, 'res===>');
        this.bookForm.reset();
      })
      this.tableShow = true;
      this.editShow = false;
    }else{
      this.errormsg = 'Не всі поля заповнені!'
    }

  }
  // editBook(item:any){
  //   this.service.editBook(item).subscribe((res) => {
  //     console.log(res,'editBook===>');

  //     this.service.getAllBooks().subscribe(data => this.readData = data);

  //   })
  // }
  // * delete by id *
  deleteBook(id:any){
    this.service.deleteBook(id).subscribe((res)=>{
      console.log(res,'deleteBook===>');

      this.service.getAllBooks().subscribe(data => this.readData = data);
    })
  }
}
