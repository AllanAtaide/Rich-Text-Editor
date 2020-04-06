/*
* global function
*/

function commandArgs(command,args)
{
    document.execCommand(command,false,args);
}

function clicked(event){    
    var output = shortcut(event);
       
    commandArgs(output.method,output.data);
    
    if(output.active){
     output.active = false;
     $('#'+output.id).css('background','#fff');
     $('#'+output.id).css('color','#333');
    }else{
     output.active = true;
     $('#'+output.id).css('background','#333');
     $('#'+output.id).css('color','#fff');
    }
}
/* end */


$('.commands button').click(function(e) {
    var command = $(this).data('command');

    if (command == 'createlink') {
    url = prompt('Enter the link here: ','http:\/\/'); commandArgs($(this).data('command'),url);
    }
    else {
        
        var id = $(this).attr('id');
        var itensId = shortcutId(id);        
        if(typeof(id) == "undefined"){
            commandArgs(command,null)
        }else{
            clicked(itensId[0]);
        }
         
    }
  });

  // h1 h2 h3 ...
  $('#title').change(function(){
      var val =$(this). children("option:selected").val();
      commandArgs('formatBlock',val);
  });

  $('#fontType').change(function(){
      var name = $(this).children("option:selected").val();
      commandArgs('fontName',name);
  });

  $("#textColor").change(function(){
      var color = $(this).children("option:selected").val();

      commandArgs('foreColor',color);
      $("#textColor").css('background-color',color);
  });

  $("#backColor").change(function(){
    var color = $(this).children("option:selected").val();

    commandArgs('backColor',color);
    $("#backColor").css('background-color',color);
});

$("#fontSize").change(function(){
    var size = $(this).children("option:selected").val();

    commandArgs('fontSize',size);
});

$("#Theme").change(function(){
    var theme = $(this).children("option:selected").val();
    if(theme == "#333"){
        $('#text').css('background','#333');
        $('#fatherText').css('background','#333');
        $('#text').css('color','#fff');
    }else{
        $('#text').css('background','#fff');
        $('#fatherText').css('background','#fff');
        $('#text').css('color','#333');
    }
});


// shortcut listening

$(document).keydown(function(event){
   if(event.altKey && event.keyCode ){
       clicked(event.keyCode);
   }
});