import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Poke } from "../interfaces/poke";
@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'http.//localhost:3000/clientes';
  constructor(private http: HttpClient) { }
  pokeList:Poke[]=[

];
 
  listar(): Observable<Poke[]> {
    return this.http.get<Poke[]>(this.apiUrl)as Observable<Poke[]>;
  }

}
