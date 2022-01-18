import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hapus } from '../model/hapus.model'; 

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class HapusService {

  constructor(private http:HttpClient) { }

  deleteAll():Observable<Hapus[]>{
    return this.http.delete<Hapus[]>(baseUrl);
  }
}
