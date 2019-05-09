import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedComponent} from './feed/feed.component';
import {FeedService} from './feed.service';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {CardComponent} from './card/card.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InfiniteScrollModule
  ],
  declarations: [FeedComponent,
    CardComponent],
  exports: [
    FeedComponent
  ],
  providers: [HttpClientModule, FeedService]
})
export class FlickrModule { }
