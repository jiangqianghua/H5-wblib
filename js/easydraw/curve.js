include('easydraw/shape.js')
var Curve = function(property){
	Shape.apply(this,arguments);
	 this.datas = [];
    if(property){
      this.datas = property.datas || [];
    }
}

Curve.prototype.render=function(){
	// 子类调用父类的方法
	this.ctx.save();
  this.ctx.beginPath();
  for(let i = 0 ; i < this.datas.length ; i++){
    let data = this.datas[i];
    if(i == 0){
      this.ctx.moveTo(data.x, data.y)
    }else{
      this.ctx.lineTo(data.x, data.y);
    }
  }
  Shape.prototype.render.apply(this,arguments);  
  this.ctx.stroke();
  this.ctx.restore();
}

Curve.prototype.setCtx=function(ctx){
  Shape.prototype.setCtx.apply(this,arguments);  
  this.ctx = ctx ;
}

