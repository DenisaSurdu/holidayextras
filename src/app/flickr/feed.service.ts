import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _flickrPhotoStreamUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
  constructor(private http: HttpClient) { }

  public getFlickrPhotoStream() {
    const url = `${this._flickrPhotoStreamUrl}&jsoncallback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}
