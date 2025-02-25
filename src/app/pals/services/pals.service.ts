import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pal, PalToPost } from '../../interfaces/pal.interface';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PalsService {
  private baseURL:string=environments.baseURL;


  constructor(private http:HttpClient) {}
  getAllPals():Observable<Pal[]>{
    return this.http.get<Pal[]>(`${this.baseURL}`)
  }

  createAPal(newpal:PalToPost):Observable<PalToPost>{
    return this.http.post<PalToPost>(`${this.baseURL}/`, newpal);
  }
  getAPal(id:string):Observable<Pal>{
    return this.http.get<Pal>(`${this.baseURL}/${id}`);
  }
  updateAPal(id:string, palToUpdate:Pal){
    return this.http.patch<Pal>(`${this.baseURL}/${id}`,palToUpdate);

  }
  deleteAPal(id:string):Observable<Pal>{
    return this.http.delete<Pal>(`${this.baseURL}/${id}`);
  }


  

}
