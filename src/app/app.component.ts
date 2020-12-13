import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appten';
  color="blue";
  err=false;
  get_the_color(){
    this.color="red"
  }
}
