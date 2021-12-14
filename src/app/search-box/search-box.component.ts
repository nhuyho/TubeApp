import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import { SearchBoxService } from '../service/search-box.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import { VideoDetail } from '../models/model';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<VideoDetail[]>();

  constructor(
    private youtubeSearch: SearchBoxService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text) => text.length > 1),
        debounceTime(500),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.youtubeSearch.search(query)),
        switchAll()
      )
      .subscribe(
        (_results) => {
          this.loading.emit(false), this.results.emit(_results);
        },
        (err) => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
