var code = '';

var spd = Math.floor(Math.random() * 200); 


var done = [];

var exrMap = {
  "variables": "assets/img/var_exrs",
  "loops":  "assets/img/loops_exrs",
  "conditions":  "assets/img/con_exrs",
  "arrays":  "assets/img/arrays_exrs",
  "functions":  "assets/img/functions_exrs",

}

var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox'),
    zoom:
       {controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2},
   trashcan: true
});

function generateSpeed(){


  console.log(spd);
  document.getElementById('speed').innerHTML = spd;
}

window.addEventListener('load', function(){

  generateSpeed();
})
//xmlContent = document.getElementById("workspaceInitialContent");
//Blockly.Xml.domToWorkspace(xmlContent, workspace);

/*
var editor = CodeMirror.fromTextArea(textarea, {
  lineNumbers: true

});
*/
function myUpdateFunction(event) {
  code = Blockly.JavaScript.workspaceToCode(workspace);
  $('#code-area').html(PR.prettyPrintOne(code));

}
workspace.addChangeListener(myUpdateFunction);

function executingCode(){
  window.alert(eval(code));
}


function exersiseNumber(){

  var ex = document.getElementById("exercises");
  var elems = ex.getElementsByTagName('p');
 
  for(var i = 0; i< elems.length; i++){  
    if(!elems[i].hasAttribute('hidden')){       
      var exNumber = elems[i].id;
    }
  }
  return exNumber;

}


function setImage(chapter){
  
  var src = exrMap[chapter];

  var img_src = document.getElementById('solution-img');

  var exNumber =  exersiseNumber();

  dir =  src + exNumber + ".png";
  img_src.setAttribute('src', dir);

}

function showSolution(chapter){

  setImage(chapter)
  var disp = document.getElementById('solution');
  var dispButton =  document.getElementById('solution_button');
  if(disp.hasAttribute('hidden')){  
    disp.removeAttribute('hidden');
    dispButton.setAttribute('value', 'Skrij Rešitev')
    
  }else{
    disp.setAttribute('hidden', true);
    dispButton.setAttribute('value', 'Rešitev')
  }

}

function move(ex) {
  var elem = document.getElementById("myBar");
  var progress = document.getElementById("myProgress");
  width = progress.getAttribute('data-progress');

  
    console.log(width);
    progress.setAttribute('data-progress', width);
    done.push(ex);

  }
}

function checkcondition(){

  if(spd <= 10 && eval(code) == 'slow'){
    window.alert('Pravilno!');
    move(2);
  }else if(spd > 10 &&spd < 40 && eval(code) == 'average'){
    window.alert('Pravilno!');
    move(2);
  }else if(spd >= 40 &&spd < 100 && eval(code) == 'fast'){
    window.alert('Pravilno!');
    move(2);
  }else if(spd >= 100 && spd < 180 && eval(code) == 'very fast'){
    window.alert('Pravilno!');
    move(2);
  }else if(spd >= 180 && eval(code) == 'extremely fast'){
    window.alert('Pravilno!');
    move(2);  
  }else{
    window.alert('Nepravilno');

  }

}

function testTeste(){
  var exNum = exersiseNumber();
  
  switch (exNum){
    case '1':
      if(eval(code) == 'Količina jabolk, ki jih ima Dalja: 20'){
        window.alert("Pravilno!");
        move(1);
      }else{
        window.alert("Nepravilno");
      }
      break;

    case '2':
      checkcondition();
      break;
    case '3':
      if(eval(code) == 1050){
        window.alert("Pravilno!");
        move(3);
      }else{
        window.alert("Nepravilno");
      }
      break;
    case '4':
      if(eval(code) == [0,2,4,6,8,10,12,14,16,18,20]){
        window.alert("Pravilno!");
        move(4);
      }else{
        window.alert("Nepravilno");
      }
      break;
    case '5':
      if(eval(code) == 'ajinevolS'){
        move(5);
        window.alert("Pravilno!");
      }else{
        window.alert("Nepravilno");
      }
      break;
    }
  }

/*
Code.LANGUAGE_NAME = {
'de': 'Deutsch',
'en': 'English',
'pl': 'Polski',
'sl': 'Slovenščina',

};
*/