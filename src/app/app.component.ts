import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://vetstreet-brightspot.s3.amazonaws.com/55/77/a059e49243609b3d7cf69a45a302/puppy-thinkstock-173329848-335sm71913.jpg',
      description: 'puppy1'
    },
    {
      url: 'https://usercontent2.hubstatic.com/12623093_f520.jpg',
      description: 'puppy2'
    }
  ]
}
