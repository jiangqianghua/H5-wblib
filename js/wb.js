include('easydraw/line.js')
include('easydraw/text.js')
include('easydraw/curve.js')
include('easydraw/arrow.js')
include('easydraw/rectangle.js')
include('easydraw/easydraw.js')
// import Shape from './easydraw/easydraw.js'
$(document).ready(function(){
  
  // var line = new Line({x:100,y:200});
  // console.log("x:"+line.x + " x:"+line.y);
  // line.render();
  var easyDraw = new EasyDraw("stage");
  $('#addLine').on('click',function(){
  	var line = new Line({
      id: '1',
      x: Math.ceil(Math.random() * 600),
      y: Math.ceil(Math.random() * 400),
      moveX: Math.ceil(Math.random() * 600),
      moveY: Math.ceil(Math.random() * 400),
      lineWidth: Math.ceil(Math.random() * 10),
      strokeStyle: "red"
    });

    easyDraw.addChild(line);
    easyDraw.update();
  });

$('#addText').on('click',function(){
  	  let text = new Text({
      id: '4',
      x: Math.ceil(Math.random() * 600),
      y: Math.ceil(Math.random() * 400),
      fontsize: Math.ceil(Math.random() * 40),
      color: "blue",
      text:"这是文字"
    });

    easyDraw.addChild(text);
    easyDraw.update();
  });

$('#addCurve').on('click',function(){
  	var datas1 = [];
    for(var i = 0 ; i < 100; i ++){
      var x = Math.ceil(Math.random() * 600); 
      var y = Math.ceil(Math.random() * 400);  
      datas1.push({x:x,y:y});
    }
    var curve = new Curve({
      id: '3',
      datas: datas1,
      lineWidth: 1,
      strokeStyle: "green",
    });

    easyDraw.addChild(curve);
    easyDraw.update();
  });


$('#addArrow').on('click',function(){
  	  var arrow = new Arrow({
      id: '5',
      x: Math.ceil(Math.random() * 600),
      y: Math.ceil(Math.random() * 400),
      moveX: Math.ceil(Math.random() * 200),
      moveY: Math.ceil(Math.random() * 200),
      lineWidth: Math.ceil(Math.random() * 10),
      strokeStyle:'black',
      theta:30, // 箭头夹角
      headlen:10 // 箭头长度
    });

   easyDraw.addChild(arrow);
   easyDraw.update();
  });

$('#addRectangle').on('click',function(){
  	  var rectangle = new Rectangle({
      id: '5',
      x: Math.ceil(Math.random() * 600),
      y: Math.ceil(Math.random() * 400),
      width: Math.ceil(Math.random() * 200),
      height: Math.ceil(Math.random() * 200),
      lineWidth: Math.ceil(Math.random() * 10),
      strokeStyle:'#f0e',
    });

   easyDraw.addChild(rectangle);
   easyDraw.update();
  });



 $('#huizhiLine').on('click',function(){
  	
 });

$('#huizhiText').on('click',function(){
  	 easyDraw.drawType(DRAW_TYPE_CURVE);
});

$('#huizhiCurve').on('click',function(){
  	
});


$('#huizhiArrow').on('click',function(){
  	 
});

$('#huizhiRectangle').on('click',function(){
  	  
});

});

// // 程序执行入口
// window.onload = function(){
// 	console.log("11");
// }

