import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from '../models/character.models';
import { Location } from '../models/location.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  private apiUrl = 'https://rickandmortyapi.com/api/';
  
  characters: Character[] = [];
  locations: Location[] = [];
  constructor(
    private http: HttpClient
    
  ) { }

  getAllCharacter(){
    return this.http.get<Character[]>(`${this.apiUrl}/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20`);
  }
  getOneCharacter(id : number){
    return this.http.get<Character>(`${this.apiUrl}character/${id}`);
  }
  getAllLocations(){
    return this.http.get<Location[]>(`${this.apiUrl}/location/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20`);
  }

}
