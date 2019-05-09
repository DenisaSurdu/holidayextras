import {Component, Input, OnInit} from '@angular/core';
import {FlickrFeed} from '../feed/feed.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: FlickrFeed;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  public  getAuthor (value) {
    if (value) {
      return value.match(/"(.*)"/)[1];
    }
  }
}
