import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Episode } from '../../models/episode.models'
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: Episode = {
    id: 0,
    name: '',
    air_date:     '',
    episode:    '',
    characters :      [],
    url: '',
    created: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
