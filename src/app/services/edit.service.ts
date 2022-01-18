import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edit } from '../model/edit.model';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root' 
})
export class EditService {

  constructor(private http:HttpClient) { }

  putAll():Observable<[]>{
    return this.http.put<[]>(baseUrl);
  }
}
