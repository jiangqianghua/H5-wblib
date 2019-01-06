include('easydraw/shape.js')
var Circle = function(property){
	Shape.apply(this,arguments);
	 super(property);
    this.x = this.y = 0;
    this.r = 10;
    if (property) {
      this.x = property.x || this.x;
      this.y = property.y || this.y;
      this.r = property.r || this.r;
    }
}

Circle.prototype.render=function(){
	// 子类调用父类的方法
    console.log("circle");
    this.context.save();
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    Shape.prototype.render.apply(this,arguments);  
    this.context.stroke();
    this.context.restore();
}

Circle.prototype.setCtx=function(ctx){
  Shape.prototype.setCtx.apply(this,arguments);  
  this.ctx = ctx ;
}
