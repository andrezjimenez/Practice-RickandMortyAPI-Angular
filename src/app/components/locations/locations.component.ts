import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Location } from '../../models/location.models'
import { RickandmortyapiService } from './../../services/rickandmortyapi.service'


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[] = [];

  constructor(
    private rickandmortyapiService: RickandmortyapiService
  ) { }

  ngOnInit(): void {
    this.rickandmortyapiService.getAllLocations()
    .subscribe(data => {
      this.locations = data;
      
      console.log(this.locations);
    })
  }

}
