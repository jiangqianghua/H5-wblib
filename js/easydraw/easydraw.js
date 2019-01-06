const DRAW_TYPE_CURVE = 0;

var EasyDraw = function(stage){
	this.canvas =document.getElementById(stage);
	this.ctx = this.canvas.getContext('2d');
	this.children = [];

	this.canvas.addEventListener('mousedown',this.mousedownEvent,false);
	this.canvas.addEventListener('mousemove',this.mousemoveEvent,false);
	this.canvas.addEventListener('mouseup',this.mouseupEvent,false);
	this.canvas.addEventListener('mouseout',this.mouseoutEvent,false);
	this.isDown = false ;
	this.drawType = DRAW_TYPE_CURVE ;
}

// 添加元素
EasyDraw.prototype.drawType=function(type){
	this.drawType = type ;
}

EasyDraw.prototype.addChild=function(shape){
	shape.setCtx(this.ctx);
    this.children.push(shape);
}

EasyDraw.prototype.delChild=function(id){
	var index = this.find(id);
    console.log("del index="+index);
    if(index >= 0)
      this.children.splice(index, 1);
}

EasyDraw.prototype.find=function(id){
	 for(var i = 0 ; i < this.children.length;i++){
      var item = this.children[i];
      if(item && item.id == id)
        return i;
    }
    return -1 ;
}

EasyDraw.prototype.clear=function(){
	this.ctx.clearRect(0, 0, 300, 200);
}

EasyDraw.prototype.update=function(){
	this.clear();
	for(var i = 0 ; i < this.children.length;i++){
      var item = this.children[i];
      item.render();
    }
  //  this.ctx.draw()
}


EasyDraw.prototype.mousedownEvent=function(){
	console.log('mousedownEvent');
	this.isDown = true ;
}

EasyDraw.prototype.mousemoveEvent=function(){
	if(this.isDown)
		console.log('mousemoveEvent');
}

EasyDraw.prototype.mouseupEvent=function(){
	console.log('mouseupEvent');
	this.isDown = false ;
}


EasyDraw.prototype.mouseoutEvent=function(){
	console.log('mouseoutEvent');
	this.isDown = false ;
}

