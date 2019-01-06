'use strict'
// 绘制文字
import { Shape } from "./shape.js";
class Text extends Shape {

  constructor(property) {
    super(property);
    this.x = 0;
    this.y = 0;
    this.text = '';
    this.color = 'black'
    if (property) {
      this.x = property.x || this.x;
      this.y = property.y || this.y;
      this.text = property.text || this.text ;
      this.color = property.color || this.color;
      this.fontsize = property.fontsize || this.fontsize;
    }
  }


  render() {
    console.log("Text");
    this.context.save();
    this.context.beginPath();
    this.context.font = "bold "+this.fontsize+"px 宋体";
    this.context.fillStyle = this.color;
    this.context.fillText(this.text,this.x,this.y);
   // super.render();
    this.context.stroke();
    this.context.restore();
  }

}

module.exports = Text;