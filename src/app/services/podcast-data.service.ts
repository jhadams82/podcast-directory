import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Podcast } from './../classes/podcast';

@Injectable({
  providedIn: 'root'
})
export class PodcastDataService {
  private dbUrl = 'https://nashville-podcast-db.herokuapp.com/podcasts/';
  private podcastCategories: string[] = [
    'News & Politics',
    'Comedy',
    'Society & Culture',
    'Sports & Recreation',
    'Business',
    'Arts',
    'Education',
    'Games & Hobbies',
    'Government & Organizations',
    'Health',
    'Kids & Family',
    'Music',
    'Religion & Spirituality',
    'Science & Nature',
    'Technology',
    'TV & Film'
  ];
  constructor(private http: HttpClient) { }
  
  getAllPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]> (this.dbUrl);
  };

  getOnePodcast(id: string): Observable<Podcast> {
    console.log("getting from " + this.dbUrl + id);
    return this.http.get<Podcast> (this.dbUrl + id);
  };

  getCategories = () => {
    return this.podcastCategories;
  };

  // generates descending year range starting with current back to the invention of podcasting
  getYears = () => {
    const years = [];
    for (let i = new Date().getFullYear(); i >= 2003; i--) {
      years.push(i);
    }
    return years;
  };
}
