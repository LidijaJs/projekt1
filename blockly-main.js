var code = '';
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

/*
var editor = CodeMirror.fromTextArea(textarea, {
  lineNumbers: true

});
*/


function myUpdateFunction(event) {
code = Blockly.JavaScript.workspaceToCode(workspace);
//document.getElementById('textarea').value = code;
$('#test').html(PR.prettyPrintOne(code));

}
workspace.addChangeListener(myUpdateFunction);


function executingCode(){

eval(code);

}


/*
Code.LANGUAGE_NAME = {
'de': 'Deutsch',
'en': 'English',
'pl': 'Polski',
'sl': 'Slovenščina',

};
*/