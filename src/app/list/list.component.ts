import { Component, OnInit } from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service:Service) { }

  ngOnInit() {
  }

}
