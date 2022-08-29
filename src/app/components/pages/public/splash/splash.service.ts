import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashService {

  private numberOfImageBeingLoaded: number = 0;
  private numberOfImageBeingLoaded$: Subject<number> = new Subject<number>();

  addImagesBeingLoaded(numberOfImagesToAdd: number): void {
    console.log('> add ' + numberOfImagesToAdd)
    this.numberOfImageBeingLoaded += numberOfImagesToAdd;
    this.numberOfImageBeingLoaded$.next(this.numberOfImageBeingLoaded);
    console.log('> new value is ' + this.numberOfImageBeingLoaded);
  }

  getNumberOfImageBeingLoaded$(): Observable<number> {
    return this.numberOfImageBeingLoaded$.asObservable();
  }

  removeImageBeingLoaded(){
    console.log('> remove 1')
    this.numberOfImageBeingLoaded -= 1;
    this.numberOfImageBeingLoaded$.next(this.numberOfImageBeingLoaded);
    console.log('> new value is ' + this.numberOfImageBeingLoaded);
  }

}
