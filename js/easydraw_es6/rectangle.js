'use strict'
// 绘制矩形
import { Shape } from "./shape.js";
class Rectangle extends Shape {

  constructor(property){
    super(property);
    this.x = 0 ;
    this.y = 0 ; 
    this.width = 0 ; 
    this.height = 0 ;
    if(property){
      this.x = property.x || this.x ; 
      this.y = property.y || this.y ; 
      this.width = property.width || this.width ; 
      this.height = property.height || this.height ;
    }
  }


  render() {
    console.log("rectange");
    this.context.save();
    this.context.beginPath();
    Shape.prototype.render.apply(this,arguments);  
    this.context.rect(this.x,this.y,this.width,this.height);
    this.context.stroke();
    this.context.restore();
  }

}

module.exports = Rectangle;