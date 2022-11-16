function drawViz(data) {

    // set margins + canvas size
    const margin = { top: 10, bottom: 50, right: 10, left: 10 };
    const height = dscc.getHeight() - margin.top - margin.bottom;
    const width = dscc.getWidth() - margin.left - margin.right;
  
    // remove the svg if it already exists
    if (document.querySelector("svg")) {
      let oldSvg = document.querySelector("svg");
      oldSvg.parentNode.removeChild(oldSvg);
    }
  
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", `${height}px`);
    svg.setAttribute("width", `${width}px`);
  
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute('width', `${width/2}px`);
    rect.setAttribute('height', `${height/2}px`);
    //if hight more the 10 then color is red
    rect.style.fill =  data.tables.DEFAULT[0].height > 10 ? 'red' : 'blue';
  
    svg.append(rect);
  
    document.body.appendChild(svg);
  }
  // subscribe to data and style changes
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });

  //change the disable property 
  $(document).ready(function(){
    $("#disable").click(function(){
      $("#disable").prop("disabled", true);
    });
  }
  