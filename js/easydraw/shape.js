var Shape = function(property){
	this.id = undefined ;
    this.strokeStyle = "blue";
    this.lineWidth = 10;
    this.width = 0 ; 
    this.height = 0 ;
    if (property) {
      this.lineWidth = property.lineWidth || this.lineWidth;
      this.strokeStyle = property.strokeStyle || this.strokeStyle;
      this.id = property.id || undefined ;
      this.width = property.width || 0 ; 
      this.height = property.height || 0 ;
    }
	
  this.superFunc = function(){
    console.log("superFunc");
  }
}

Shape.prototype.render=function(){
	this.ctx.lineWidth = this.lineWidth;
  this.ctx.strokeStyle = this.strokeStyle;
}

Shape.prototype.setCtx=function(ctx){
	this.ctx = ctx ;
}