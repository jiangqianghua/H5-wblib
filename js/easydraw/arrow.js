include('easydraw/shape.js')
var Arrow = function(property){
	Shape.apply(this,arguments);
	this.x = 0;
    this.y = 0;
    this.moveX = this.moveY = 0;
    this.theta =  30;
    this.headlen =  10;
    if (property) {
      this.x = property.x || this.x;
      this.y = property.y || this.y;
      this.moveX = property.moveX || this.moveX;
      this.moveY = property.moveY || this.moveY;
      this.theta = property.theta || 30;
      this.headlen = property.headlen || 10;
    }
}

Arrow.prototype.render=function(){
	// 子类调用父类的方法
	  this.ctx.save();
    this.ctx.beginPath();
    let angle = Math.atan2(this.y - this.moveY, this.x - this.moveX) * 180 / Math.PI;
    let angle1 = (angle + this.theta) * Math.PI / 180;
    let angle2 = (angle - this.theta) * Math.PI / 180;
    let topX = this.headlen * Math.cos(angle1);
    let topY = this.headlen * Math.sin(angle1);
    let botX = this.headlen * Math.cos(angle2);
    let botY = this.headlen * Math.sin(angle2);
    let arrowX, arrowY;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.moveX, this.moveY);
    arrowX = this.moveX + topX;
    arrowY = this.moveY + topY;
    this.ctx.moveTo(arrowX, arrowY);
    this.ctx.lineTo(this.moveX, this.moveY);
    arrowX = this.moveX + botX;
    arrowY = this.moveY + botY;
    this.ctx.lineTo(arrowX, arrowY);
    
    Shape.prototype.render.apply(this,arguments);  
    this.ctx.stroke();
    this.ctx.restore();
}

Arrow.prototype.setCtx=function(ctx){
  Shape.prototype.setCtx.apply(this,arguments);  
  this.ctx = ctx ;
}

