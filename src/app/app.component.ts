import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a ui-sref="hello">Go to Main</a>
    <div ui-view></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
