import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Podcast } from 'src/app/classes/podcast';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.scss']
})
export class SocialFormComponent implements OnInit {
  socForm;

  @Input() podcast: Podcast;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.socForm = this.fb.group({
      email: '',
      facebook: '',
      instagram: '',
      linkedIn: '',
      twitter: '',
      website: ''
    });
  }
}
