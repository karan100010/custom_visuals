function drawViz(vizData){
    var height = dscc.getHeight();
    var width = dscc.getWidth();
    console.log(vizData);
    // this is where you write your viz code
  }
  
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform})
// create and add the canvas
// do this one time
var canvasElement = document.createElement('canvas');
var ctx = canvasElement.getContext('2d');
canvasElement.id = 'myViz';
document.body.appendChild(canvasElement);

function drawVuiz(data){
  // clear the canvas
  var ctx = canvasElement.getContext('2d');
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  // viz code goes here

}
// create and add the canvas
var chartElement = document.createElement('div');
chartElement.id = 'myViz';
document.body.appendChild(chartElement);
  