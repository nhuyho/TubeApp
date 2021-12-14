import { Component, Input, OnInit } from '@angular/core';
import { VideoDetail } from '../models/model';

@Component({
  selector: 'app-video-result',
  templateUrl: './video-result.component.html',
  styleUrls: ['./video-result.component.css'],
})
export class VideoResultComponent implements OnInit {
  @Input() result: VideoDetail;
  constructor() {}

  ngOnInit(): void {}
}
