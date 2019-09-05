export default class ChatItem {
  public text: string;
  public side: string;
  public posted: Date;

  constructor (text: string, side: string, posted: Date) {
    this.text = text;
    this.side = side;
    this.posted = posted;
  }
}
