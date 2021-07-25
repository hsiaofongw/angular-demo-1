import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageLoadingService } from '../../services/image-loading.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input()
  imageSources: string[] = [];

  @Input()
  initialIndex = 0;

  currentIndex = 0;

  imageUrl = '';

  constructor(private imageLoadingService: ImageLoadingService) {}

  ngOnInit(): void {
    this.currentIndex = this.initialIndex;
    this.fetchImage();
  }

  public nextFrame(): void {
    const length = this.imageSources.length;
    if (length === 0) {
      return;
    }

    this.currentIndex = (this.currentIndex + length + 1) % length;
    this.fetchImage();
  }

  private fetchImage(): void {
    const imageURL = this.imageSources[this.currentIndex];
    const imageData$ = this.imageLoadingService.getImageData({
      imageSourceURL: imageURL,
    });
    imageData$.subscribe((imageDataObject) =>
      this.loadImage(imageDataObject.imageData)
    );
  }

  public previousFrame(): void {
    const length = this.imageSources.length;
    if (length === 0) {
      return;
    }

    this.currentIndex = (this.currentIndex + length - 1) % length;
    this.fetchImage();
  }

  private loadImage(imageData: Blob): void {
    const url = URL.createObjectURL(imageData);
    this.imageUrl = url;
  }
}
