include('easydraw/shape.js')
var Rectangle = function(property){
	Shape.apply(this,arguments);
	this.x = 0;
  this.y = 0 ; 
 // this.width = this.height = 0 ;
  if(property){
    this.x = property.x || this.x;
    this.y = property.y || this.y;
    // this.width = property.width || this.width;
    // this.height = property.height || this.height;
  }
}

Rectangle.prototype.render=function(){
	// 子类调用父类的方法
	  console.log("rectange");
    this.ctx.save();
    this.ctx.beginPath();
    Shape.prototype.render.apply(this,arguments);  
    this.ctx.rect(this.x,this.y,this.width,this.height);
    this.ctx.stroke();
    this.ctx.restore();

    this.superFunc();
}

Rectangle.prototype.setCtx=function(ctx){
  Shape.prototype.setCtx.apply(this,arguments);  
  this.ctx = ctx ;
}

