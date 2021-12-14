import { Component } from '@angular/core';
import { VideoDetail } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TubeApp';
  results: VideoDetail[];
  loading: boolean;
  message = '';
  updateResults(results: VideoDetail[]): void {
    this.results = results;
    console.log(this.results);

    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = '';
    }
  }
}
