fetch("./side-menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("side-menu").innerHTML = data;
  });

  fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });


function hidde_solution(){
    var disp = document.getElementById('solution');
    var dispButton =  document.getElementById('solution_button');
 
    disp.setAttribute('hidden', true);
    dispButton.setAttribute('value', 'Rešitev')

}

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

    hidde_solution();
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
    hidde_solution();
   
 }

function mainPage(){
 window.open("http://localhost/projekt1/prvastran.html","_self")

}




