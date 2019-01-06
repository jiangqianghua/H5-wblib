// 绘制圆
import { Shape } from "./shape.js";
'use strict'
class Circle extends Shape {

  constructor(property = null) {
    super(property);
    this.x = this.y = 0;
    this.r = 10;
    if (property) {
      this.x = property.x || this.x;
      this.y = property.y || this.y;
      this.r = property.r || this.r;
    }
  }

  render() {
    console.log("circle");
    this.context.save();
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    super.render();
    this.context.stroke();
    this.context.restore();
  }
}

module.exports = Circle;