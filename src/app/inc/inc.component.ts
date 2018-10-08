import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent implements OnInit {

  constructor() {
  }

  num = 0;

  incStep = 1;

  ngOnInit() {
  }

  handleAddButtonOnClick() {
    this.num = this.num + this.incStep;
  }

}
