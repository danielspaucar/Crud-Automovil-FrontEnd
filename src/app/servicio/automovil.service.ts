import { Injectable } from '@angular/core';
import { Automovil } from '../modelos/Automovil';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/automovil';
  
  getAutomovil(){
    return this.http.get<Automovil[]>(this.url);
  }

  createAutomovil(automovil:Automovil){
    return this.http.post<Automovil>(this.url, automovil);
  }

  getAutomovilId(id:number){
    return this.http.get<Automovil>(this.url+"/"+id);
  }

  updateAutomovil(automovil:Automovil){
    return this.http.put<Automovil>(this.url,automovil);
  }

  deleteAutomovil(id:number){
    return this.http.delete<Automovil>(this.url+"/"+id);
  }
}
