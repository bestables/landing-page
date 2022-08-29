import { Component, ElementRef, OnInit } from '@angular/core';
import { SplashService } from '../splash/splash.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    public splashService: SplashService
  ) { }

  ngOnInit(): void {
    let images = this.elementRef.nativeElement.getElementsByTagName('img');
    const numberOfImagesBeingLoaded = images.length;
    this.splashService.addImagesBeingLoaded(numberOfImagesBeingLoaded);
  }

}
