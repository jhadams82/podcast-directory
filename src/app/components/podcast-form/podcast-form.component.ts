import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { PodcastDataService } from 'src/app/services/podcast-data.service';
import { Podcast } from '../../classes/podcast';

@Component({
  selector: 'app-podcast-form',
  templateUrl: './podcast-form.component.html',
  styleUrls: ['./podcast-form.component.scss']
})
export class PodcastFormComponent implements OnInit, OnChanges {
  categories: string[];
  years: number[];
  podForm;
  
  @Input() podcast: Podcast;

  constructor(
    private fb: FormBuilder,
    private podcastdataService: PodcastDataService
  ) {}

  ngOnInit() {
    this.podForm = this.fb.group({
      title: '',
      description: '',
      category: '',
      yearStarted: '',
      hosts: this.fb.array([])
    });

    this.addHost();

    this.categories = this.podcastdataService.getCategories();

    this.years = this.podcastdataService.getYears();
  }

  ngOnChanges(changes: SimpleChanges) { 
    console.log("podcast: \n")
    console.log(this.podcast);
    console.log("changes: \n");
    console.log(changes);
    if (!changes.podcast.firstChange) { 
      this.hostForms.removeAt(0);
      this.podcast.hosts.forEach((host, i) => { 
        const currentHost = this.fb.group({
          firstName: host.firstName,
          lastName: host.lastName
        });
        this.hostForms.push(currentHost);
      });
    }
  }

  get hostForms() {
    return this.podForm.get('hosts') as FormArray;
  }

  addHost() {
    const host = this.fb.group({
      firstName: '',
      lastName: ''
    });
    this.hostForms.push(host);
  }

  deleteHost(i) {
    this.hostForms.removeAt(i);
  }

  consoleData() {
    console.log(this.podForm.value);
  }
}
