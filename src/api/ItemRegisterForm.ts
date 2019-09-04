export default class ItemRegisterForm {
  public name: string;
  public code: string;
  public price: number;
  public quantity: number;
  public comment: string;

  constructor(name: string, code: string, price: number, quantity: number, comment: string) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.quantity = quantity;
    this.comment = comment;
  }
}
