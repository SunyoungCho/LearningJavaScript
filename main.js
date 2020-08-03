$(document).ready(function() {
  'use strict';   //자바스크립트 인터프리터에서 코드를 더 엄격하게 처리하라는 뜻
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  //var c = Shape.Circle(200,200,50);
  //c.fillColor = 'green';

  var tool = new Tool();

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'yellow';
    var a = Shape.Circle(event.point, 20);
    a.fillColor = 'beige';
  };


  paper.view.draw();
  //console.log('main.js loaded');
});
