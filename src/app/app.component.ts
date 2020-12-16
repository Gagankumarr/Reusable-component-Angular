import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appten';
  data=[
    {
      name:'bruce',
      age:54,
    },
    {
      name:'sam',
      age:33,
    },
    {
      name:'loki',
      age:65,
    }
  ]
  
}
