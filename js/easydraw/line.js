include('easydraw/shape.js')
var Line = function(property){
	Shape.apply(this,arguments);
	this.x = 0;
    this.y = 0 ; 
    this.moveX = this.moveY = 0 ;
    if(property){
      this.x = property.x || this.x;
      this.y = property.y || this.y;
      this.moveX = property.moveX || this.moveX;
      this.moveY = property.moveY || this.moveY;
    }
}

Line.prototype.render=function(){
	// 子类调用父类的方法
	  console.log("line");
    this.ctx.save();
    this.ctx.beginPath();
    Shape.prototype.render.apply(this,arguments);  
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.moveX, this.moveY);
    this.ctx.stroke();
    this.ctx.restore();
}

Line.prototype.setCtx=function(ctx){
  Shape.prototype.setCtx.apply(this,arguments);  
  this.ctx = ctx ;
}

