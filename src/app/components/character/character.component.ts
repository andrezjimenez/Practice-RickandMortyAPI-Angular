import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../models/character.models'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character= {
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
  @Output() showcharacterDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { 
  }

  onShowCharacterDetail(){
    this.showcharacterDetails.emit(this.character.id);
}

}
