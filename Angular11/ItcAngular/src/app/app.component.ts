import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to ITC app'; //This is model property which will bind Angular expression as the one way binding
  name = 'A11 App';
  clickMessage = 'Status Of training';

  //Declare date object
  today = new Date();

  onClickMe(){
    this.clickMessage = 'Training is Up!';
  }
}
