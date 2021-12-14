import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoDetail } from '../models/model';

const API_KEY = 'AIzaSyCi6JuZoNeWt5RMfNxWpWhQSXUXKaCiyAo';
const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
@Injectable({
  providedIn: 'root',
})
export class SearchBoxService {
  constructor(private http: HttpClient) {}
  search(query: string): Observable<any> {
    const params: string = [
      `key=${API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
      `q=${query}`,
    ].join('&');
    const queryUrl = `${YOUTUBE_API}?${params}`;
    return this.http.get(queryUrl).pipe(
      map((response) => {
        return response['items'].map((item) => {
          return new VideoDetail({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url,
            channelTitle: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
          });
        });
      })
    );
  }
}
