import { Component, OnInit } from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public service:Service) { }

  ngOnInit() {
  }

}
