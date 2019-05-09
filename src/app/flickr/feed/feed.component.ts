import {Component, OnInit} from '@angular/core';
import {FeedService} from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public flickFeed: FlickrFeed[] = [];

  constructor(private _feedService: FeedService) {
  }

  ngOnInit() {
    this._getFeed();
  }

  private _getFeed() {
    this._feedService.getFlickrPhotoStream()
      .subscribe((data) => {
        if (data.hasOwnProperty('items')) {
         this.flickFeed.push(... data['items']);
        }
      });
  }

  public onScrollDown() {
    this._getFeed();

    console.log(this.flickFeed);
  }

}

export interface FlickrFeed {
  title: string;
  description: string;
  media: string;
  tags: string[];
  author: string;
  link: string;

}
