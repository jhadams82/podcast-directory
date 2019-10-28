import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDataService } from './../../services/podcast-data.service';
import { Podcast } from './../../classes/podcast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent implements OnInit, OnDestroy {
  podId: string;
  private podSub: any;
  private authSub: any;
  podcast: Observable<Podcast>;

  isLoggedIn: boolean;
  loggedInUser: string;
  isUserVerified: boolean;

  constructor(
    private route: ActivatedRoute,
    private podcastDataService: PodcastDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // get podcast id from route params
    this.podSub = this.route.paramMap.subscribe(params => {
      console.log(params);
      this.podId = params.get('id');
      console.log("podId:" + this.podId);
    });

    console.log("getting podcast " + this.podId);
    
    // retrieve podcast data
    this.podcast = this.podcastDataService.getOnePodcast(this.podId);
    
    // check loggedIn status
    this.authSub = this.authService.authState.subscribe(state => {
      this.isLoggedIn = state.isLoggedIn;
      this.loggedInUser = state.loggedInUser;
      this.isUserVerified = state.isUserVerified;
    });
  }

  isEmpty(podInfo) {
    return Object.values(podInfo).every(key => key === null || key === '');
  }

  ngOnDestroy() {
    this.podSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
