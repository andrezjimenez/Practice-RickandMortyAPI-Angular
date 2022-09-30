import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.models'
import { RickandmortyapiService } from '../../services/rickandmortyapi.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private rickandmortyapiService: RickandmortyapiService
  ) { }

  ngOnInit(): void {
    this.rickandmortyapiService.getAllCharacter()
    .subscribe(data => {
      this.characters = data;
      console.log(this.characters);
    })
  }

}
