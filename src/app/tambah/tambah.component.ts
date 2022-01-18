import { Component, OnInit } from '@angular/core';
import { Tambah } from '../model/tambah.model';
import { TambahService } from '../services/tambah.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css']
})
export class TambahComponent implements OnInit {

  tambahs?:Tambah[];
  currentEdit:Tambah={};
  name='';

  constructor(private tambahService:TambahService) { }

  ngOnInit(): void {
    this.retrieveTambah()
  }
  retrieveTambah():void{
    this.tambahService.postAll()
      .subscribe(
        data=>{
          this.tambahs=data; 
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )

  }


}
