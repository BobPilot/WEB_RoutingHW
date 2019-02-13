import { Component, OnInit } from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public service:Service) { }

  ngOnInit() {
  }

}
