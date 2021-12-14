import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'AIzaSyCi6JuZoNeWt5RMfNxWpWhQSXUXKaCiyAo';
const YOUTUBE_API_DETAIL = 'https://www.googleapis.com/youtube/v3/videos';

@Injectable({
  providedIn: 'root',
})
export class VideoDetailService {
  constructor(private http: HttpClient) {}
  getDetail(): Observable<any> {
    const params: string = [
      `key=${API_KEY}`,
      `id=id`,
      `part=snippet,contentDetails,statistics,status,localizations`,
    ].join('&');
    const urlDetail = `${YOUTUBE_API_DETAIL}?${params}`;
    return this.http.get(urlDetail).pipe();
  }
}
