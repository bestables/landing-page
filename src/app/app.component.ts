import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoading: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      this.isLoading = false;
    }, 100)
  }
}
