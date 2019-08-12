import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PodcastDataService } from './../../services/podcast-data.service';
import { Podcast } from './../../classes/podcast';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {
  podcasts: Observable<Podcast[]>;

  constructor(private podcastDataService: PodcastDataService) {}

  ngOnInit() {
    this.podcasts = this.podcastDataService.getAllPodcasts();
  }
}
