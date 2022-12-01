import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.models'
import { RickandmortyapiService } from './../../services/rickandmortyapi.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

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
