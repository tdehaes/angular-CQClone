import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    courseTitle: "Second title",
  };
  title = 'Angular shallow dive';

  onLogoClick(){
    alert("logo clicked");
  }
  onKeyUp(newTitle: string){
    this.data.courseTitle = newTitle;
  }
}


