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
  // @Output() showLocationDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  
  }

}
