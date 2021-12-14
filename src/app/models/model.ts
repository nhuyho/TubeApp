export class VideoDetail {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  channelId: string;
  channelUrl: string;
  channelTitle: string;
  publishedAt: Date;
  thumbnails: string;
  constructor(obj: any) {
    this.id = (obj && obj.id) || null;
    this.title = (obj && obj.title) || null;
    this.description = (obj && obj.description) || null;
    this.thumbnailUrl = (obj && obj.thumbnailUrl) || null;
    this.videoUrl =
      (obj && obj.videoUrl) || `https://www.youtube.com/watch?v=${this.id}`;
    this.channelId = (obj && obj.channelId) || null;
    this.channelUrl = (obj && obj.channelUrl) || null;
    this.channelTitle = (obj && obj.channelTitle) || null;
    this.publishedAt = (obj && obj.publishedAt) || null;
    this.thumbnails = (obj && obj.thumbnails) || null;
  }
}
