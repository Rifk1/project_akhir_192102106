import { Injectable } from '@angular/core';
import { Tambah } from '../model/tambah.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class TambahService {

  constructor(private http:HttpClient) { }

  postAll():Observable<Tambah[]>{
    return this.http.post<Tambah[]>(baseUrl);
  }
}
