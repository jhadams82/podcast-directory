import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Podcast } from 'src/app/classes/podcast';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {
  subForm;

  @Input() podcast: Podcast;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subForm = this.fb.group({
      apple: '',
      breaker: '',
      google: '',
      overcast: '',
      radioPublic: '',
      rss: '',
      spotify: '',
      stitcher: '',
      tuneIn: ''
    });
  }
}
