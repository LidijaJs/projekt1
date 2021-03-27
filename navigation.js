fetch("./side-menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("side-menu").innerHTML = data;
  });


function exrsPrev(){

    var ex = document.getElementById("exercises");
    var elems = ex.getElementsByTagName('p');
   
    for(var i =  elems.length - 1; i> 0; i--){  
        if(!elems[i].hasAttribute('hidden')){  
                console.log(i)
                elems[i-1].removeAttribute('hidden');
                elems[i].setAttribute('hidden', true);
                break;
        }
        
    };
}

function exrsNext(){

    var ex = document.getElementById("exercises");
    var elems = ex.getElementsByTagName('p');
   
    for(var i = 0; i< elems.length - 1; i++){  
        if(!elems[i].hasAttribute('hidden')){       
                console.log(i)
                elems[i+1].removeAttribute('hidden');
                elems[i].setAttribute('hidden', true);
                break;
        } 
    };
   
 }