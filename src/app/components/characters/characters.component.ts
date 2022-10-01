import { Component, OnInit , Output} from '@angular/core';
import { Character } from '../../models/character.models'
import { RickandmortyapiService } from '../../services/rickandmortyapi.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  showCharacterDetails = false;

  characterChosen : Character = {
    id: 0,
    name: '',
    status:'',
    species: '',
    type : '',
    gender: '',
    origin: {
      name:'',
      url:'',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: ''
  }


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
  toggleCharacterDetail (){
    this.showCharacterDetails =  !this.showCharacterDetails ;
  }
  onshowdetail(idCharacter : number){
    // this.rickandmortyapiService.getOneCharacter(idCharacter)
    this.rickandmortyapiService.getOneCharacter(idCharacter)
    .subscribe( data => {
      this.characterChosen = data;
      console.log(data);
      this.toggleCharacterDetail ()
    } )
    console.log(idCharacter);
  }
}
