import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-content',
  templateUrl: './mid-content.component.html',
  styleUrls: ['./mid-content.component.css']
})
export class MidContentComponent implements OnInit {

  helpShown: boolean;
  constructor() { }

  ngOnInit() {
    this.helpShown = false;
  }
  onClick(){
    if (this.helpShown == true) {
      this.helpShown = false;
    } else {
      this.helpShown = true;
    }
  }

}
