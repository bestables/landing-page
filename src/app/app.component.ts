import { ElementRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SplashService } from './components/pages/public/splash/splash.service';
import { combineLatest, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoading: boolean = true;
  isInvisible: boolean = false;

  constructor(private splashService: SplashService) { }

  ngOnInit(): void {
    window.addEventListener('wheel', this.preventScroll, {passive: false});
    window.addEventListener('touchstart', this.preventScroll, {passive: false});

    const numberOfImageBeingLoaded$ =
      this.splashService.getNumberOfImageBeingLoaded$();

    const minSplashTime$ = timer(1000).pipe(
      tap(() => console.log('> min time over'))
    );

    combineLatest([numberOfImageBeingLoaded$, minSplashTime$]).subscribe(
      ([numberOfImageBeingLoaded, time]) => {
        if(numberOfImageBeingLoaded === 0 && time === 0){
          window.removeEventListener('wheel', this.preventScroll);
          window.removeEventListener('touchstart', this.preventScroll);
          this.isInvisible = true;
          setTimeout(() => {this.isLoading = false}, 500);
        }
    })
  }

  preventScroll(event: any){
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
