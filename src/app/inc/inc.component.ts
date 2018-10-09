import {Component, OnInit} from '@angular/core';

interface IncOpLog {
  time: Date;
  value: number;
  operationType: 'plus';
}

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

  incOpLogs: IncOpLog[] = [];

  ngOnInit() {
  }

  handleAddButtonOnClick() {
    this.num = this.num + this.incStep;
    this.incOpLogs.push({time: new Date(), value: this.incStep, operationType: 'plus'});
  }

  handleRevertButtonOnClick(opLog: IncOpLog) {
    this.num = this.num - opLog.value;
  }

}
