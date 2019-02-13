import {Contact} from './model';

export class Service{
  contacts:Contact[]=[];
  currentContact:Contact|null = null;

  valid:boolean = true;
  isEdit: boolean = false;

  public addContact(contact:Contact){

    this.valid = true;

    this.checkIfValid(contact);

    if(this.valid){
      this.contacts.push(contact);
    }
  }

  private checkIfValid(contact:Contact){
    for (let cont of this.contacts){
      if(contact.equals(cont)){
        this.valid = false;
      }
    }
  }

  public removeContact(index:number){
    if(this.contacts[index] === this.currentContact){
      this.currentContact = null;
    }
    this.contacts.splice(index, 1);
  }

  public showContact(contact:Contact){
    if(!this.isEdit) {
      this.currentContact = contact;
    }
  }


  public editContact(contact:Contact){
    this.valid = true;
    this.checkIfValid(contact);
    if(this.valid){
      this.contacts[this.contacts.indexOf(this.currentContact)] = contact;
      this.currentContact = contact;
    }
    this.isEdit = false;
  }
}
