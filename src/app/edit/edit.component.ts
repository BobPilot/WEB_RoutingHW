import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {Contact} from '../model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currName:string = this.service.currentContact.name;
  currEmail:string = this.service.currentContact.email;
  currPhone:string = this.service.currentContact.phone;
  currAddress:string = this.service.currentContact.address;

  constructor(public service:Service) { }

  ngOnInit() {
  }

  editContact(){
    this.service.editContact(new Contact(
      this.currName,
      this.currEmail,
      this.currPhone,
      this.currAddress
    ));
  }

}
