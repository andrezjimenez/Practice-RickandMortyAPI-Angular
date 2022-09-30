import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from '../models/character.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  private apiUrl = 'https://rickandmortyapi.com/api/';
  
  characters: Character[] = [];

  constructor(
    private http: HttpClient
    
  ) { }

  getAllCharacter(){
    return this.http.get<Character[]>(`${this.apiUrl}/character/1,2,3,4,5,6`);
  }

}
