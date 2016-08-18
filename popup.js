(function() {
  var ul = document.createElement("UL");
  ul.id = "gridlines-container";
  ul.style = "display:none"
  document.querySelector('body').appendChild(ul);

  var visible = false;

  var columnUl = document.createElement("UL");
  columnUl.id = "columnlines-container";
  columnUl.style = "display:none"
  document.querySelector('body').appendChild(columnUl);

  _addLines(25);
  _addColumns();

  function _addLines(height){
    ul.innerHTML = '';
    for(var i = 0; i < screen.height / height; i++){
      ul.appendChild(_getLine("height:" + height  + "px", "gridlines-container__grids"));
    }
  };

  function _addColumns(){
    columnUl.innerHTML = '';
    for(var i = 0; i < 12; i++){
      columnUl.appendChild(_getLine("width: 8.33%", "columnlines-container__grids"));
    }
  };

  function _toggleLines() {
    if(visible){
      document.getElementById("gridlines-container").style="display:none";
      document.getElementById("columnlines-container").style="display:none";
    }
    else{
        document.getElementById("gridlines-container").style="";
        document.getElementById("columnlines-container").style="";
    }
    visible = !visible;
  };

  function _getLine(height, classn) {
    var node = document.createElement("LI");
    var h = height ? height : "height: 25px;";
    node.style = h;
    node.className = classn;
    return node;
  };

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.size) {
        _addLines(request.size);
      }
      else {
        _toggleLines();
      }
    }
  );

})();
