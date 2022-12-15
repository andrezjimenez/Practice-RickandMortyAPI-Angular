import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Location } from '../../models/location.models'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: Location = {
    id: 0,
    name: '',
    type: '',
    residents : [],
    dimension: '',
    url: '',
    created: '',
  }
  cantidadPersonajes: number | undefined = 0
  // @Output() showLocationDetails = new EventEmitter<number>();

  constructor(
    
  ) 
  { 
   }
  
  ngOnInit(): void {
    this.residents();
  }
  
  residents () {
    if (this.location.residents?.length){
      this.cantidadPersonajes = this.location.residents?.length;
      for ( let i = 0; i <= this.cantidadPersonajes ; i ++){
        this.location.residents[i]=this.location.residents[i]?.replace('https://rickandmortyapi.com/api/character/','');
        
      }
      console.log(this.location.residents?.join(','))
      this.cantidadPersonajes = 0;
    }
    
  }

}
