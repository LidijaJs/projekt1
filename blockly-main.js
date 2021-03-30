var code = '';


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

eval(code);

}

function setImage(chapter){
  
  var src = exrMap[chapter];

  var img_src = document.getElementById('solution-img');

  var ex = document.getElementById("exercises");
  var elems = ex.getElementsByTagName('p');
 
  for(var i = 0; i< elems.length; i++){  
    if(!elems[i].hasAttribute('hidden')){       
      var exNumber = elems[i].id;
    }
  }

  dir =  src + exNumber + ".png";
  img_src.setAttribute('src', dir);

}

function showSolution(chapter){

  setImage(chapter)
  var disp = document.getElementById('solution');
  var dispButton =  document.getElementById('solution_button');
  if(disp.hasAttribute('hidden')){  
    disp.removeAttribute('hidden');
    dispButton.setAttribute('value', 'Skriti Rešitev')
    
  }else{
    disp.setAttribute('hidden', true);
    dispButton.setAttribute('value', 'Rešitev')
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