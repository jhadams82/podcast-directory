import { Host } from './host';

export class Podcast {
  id: string;
  category: string;
  contact: {
    email: string;
    facebook: string;
    instagram: string;
    linkedIn: string;
    twitter: string;
    website: string;
  };
  description: string;
  hosts: Host[];
  image: string;
  status: string;
  subscription: {
    apple: string;
    breaker: string;
    google: string;
    overcast: string;
    radioPublic: string;
    rss: string;
    spotify: string;
    stitcher: string;
    tuneIn: string;
  };
  title: string;
  username: string;
  yearStarted: number;
}
