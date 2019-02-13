import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {Contact} from '../model';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {


  currName:string = '';
  currEmail:string = '';
  currPhone:string = '';
  currAddress:string = '';

  constructor(public service:Service) { }

  addContact():void{
    this.service.addContact(new Contact(
      this.currName,
      this.currEmail,
      this.currPhone,
      this.currAddress
    ));
    this.currName = '';
    this.currEmail = '';
    this.currPhone = '';
    this.currAddress = '';

  }

}
