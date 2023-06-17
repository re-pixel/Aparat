import { Logic } from "./tableLogic.js";

var TableLogic = new Logic();
var img = ["cocaine1.jpeg","pistolj.jpeg","purple-haze1.jpeg"];
var slot = [15];

 
window.onkeypress = function(event) {
  if (event.which == 32) {
    CleanTable()
    NewTable();
  }
}

function NewTable()  {
  
  var table = document.getElementById("tabla");

      for(var y = 0; y < 15; y++){
            var item = document.createElement('div');
            var itemImage = document.createElement('img');

            table.appendChild(item);   
            item.appendChild(itemImage);

            item.classList.add('grid-item');
            itemImage.src = "../assets/" + TableLogic.randomSlika(img);
            itemImage.style.cssText = "object-fit:cover;width:100%;max-heigt:100%";
                         
            slot[y] = item;            
          }        
        
}
  function CleanTable()  {
    for(var y = 0; y < 15; y++){
      slot[y].remove();
    }
  } 

  NewTable();

  function animation(){
    
  }