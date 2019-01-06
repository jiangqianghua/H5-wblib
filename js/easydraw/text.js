include('easydraw/shape.js')
var Text = function(property){
	Shape.apply(this,arguments);
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

Text.prototype.render=function(){
	// 子类调用父类的方法
	  console.log("Text");
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.font = "bold "+this.fontsize+"px 宋体";
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text,this.x,this.y);
   // super.render();
    this.ctx.stroke();
    this.ctx.restore();
}

Text.prototype.setCtx=function(ctx){
  Shape.prototype.setCtx.apply(this,arguments);  
  this.ctx = ctx ;
}

