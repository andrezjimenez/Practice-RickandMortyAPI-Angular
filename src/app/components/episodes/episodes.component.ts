import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Episode } from '../../models/episode.models'
import { RickandmortyapiService } from './../../services/rickandmortyapi.service'

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(
    private rickandmortyapiService: RickandmortyapiService
  ) {}

  ngOnInit(): void {
    this.rickandmortyapiService.getAllEpisode()
    .subscribe(data => {
      this.episodes = data.results;
      console.log(this.episodes);
    })
  }

}
