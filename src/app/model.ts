export class Contact{
  constructor(
    public name:string,
    public email:string,
    public phone:string,
    public address:string){};

  public equals(other:Contact):boolean{
    return this.email === other.email
      || this.phone === other.phone;
  }
}
