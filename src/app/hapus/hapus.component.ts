import { Component, OnInit } from '@angular/core';  
import { Hapus } from '../model/hapus.model';
import { HapusService } from '../services/hapus.service';

@Component({
  selector: 'app-hapus',
  templateUrl: './hapus.component.html',
  styleUrls: ['./hapus.component.css']
})
export class HapusComponent implements OnInit {

  hapuss?:Hapus[];
  currentEdit:Hapus={};
  name='';

  constructor(private hapusService:HapusService) { }

  ngOnInit(): void {
    this.retrieveHapus()
  }
  retrieveHapus():void{
    this.hapusService.deleteAll()
      .subscribe(
        data=>{
          this.hapuss=data; 
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )

  }

}
