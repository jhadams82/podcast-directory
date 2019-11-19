import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDataService } from '../../services/podcast-data.service';
import { Podcast } from '../../classes/podcast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-podcast-info',
  templateUrl: './podcast-info.component.html',
  styleUrls: ['./podcast-info.component.scss']
})
export class PodcastInfoComponent implements OnInit {
  podId: string;
  private podSub: any;
  podcast: Podcast;
  progress: number;

  constructor(
    private route: ActivatedRoute,
    private podcastDataService: PodcastDataService
  ) {}

  ngOnInit() {
    // get podcast id from route params
    this.podId = this.route.snapshot.paramMap.get("id");
    
    // retrieve podcast data
    this.podSub = this.podcastDataService.getOnePodcast(this.podId).subscribe((podcast) => { this.podcast = podcast });
    
    this.progress = 1;
  }

  previousPage() {
    this.progress--;
  }

  nextPage() {
    this.progress++;
  }

  savePodcast() { 
    if (this.podId) { 
      //this.podcastDataService.put
    } else {
      //this.podcastDataService.post
    }
  }
}

NgOnDestroy() {
  this.podSub.Unsubscribe();
}
