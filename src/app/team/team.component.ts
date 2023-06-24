import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  constructor() { }
  public accordion: any = {};

  ngOnInit(): void {
    this.accordion = {
      'item1':true,
      'item2':false
    }
  }
  button1 = () => {
    let obj1 = this.accordion.item1;
    if ( obj1 === false) {
      this.accordion.item1 = true,
      this.accordion.item2 = false
    }
  }
  button2 = () => {
    let obj2 = this.accordion.item2;
    if ( obj2 === false) {
      this.accordion.item2 = true,
      this.accordion.item1 = false
    }
  }
}
