const keyboard = {
    66:{
        id:'bold', // alt + b
        method:'bold',
        data:null,
        active: false
    },
    73:{
        id:'italic', // alt + i
        method:'italic',
        data:null,
        active: false
    },
    49:{
        method:'fontSize', // alt + 1
        data:1
    },
    51:{
        method:'fontSize', // alt + 3
        data:3
    },
    52:{
        method:'fontSize', // alt + 4
        data:4
    },
    53:{
        method:'fontSize', // alt + 5
        data:5
    },
    55:{
        method:'fontSize', // alt + 7
        data:7
    },
    85:{
        id:'underline',
        method:'underline', // alt + u
        data: null,
        active:false
    },
    // donw edit
    83:{
        id:'strike',
        method:'strikeThrough', // alt + s
        data: null,
        active:false
    },
    76:{
        id:'textLeft',
        method:'justifyLeft', // alt + l
        data: null,
        active:false
    },
    67:{
        id:'textCenter',
        method:'justifyCenter', // alt + c
        data: null,
        active:false
    },
    82:{
        id:'textRight',
        method:'justifyRight', // alt + R
        data: null,
        active:false
    },
    'textJustify':{
        id:'textJustify',
        active:false,
        data:null,
        method:'justifyFull'
    },
    'textIndent':{
        id:'textIndent',
        active:false,
        method:'indent',
        data:null
    },
    'textOutdent':{
        id:'textOutdent',
        active:false,
        method:'outdent',
        data:null
    },
    'listUl':{
        id:'listUl',
        active:false,
        method:'insertUnorderedList',
        data:null
    },
    'listOl':{
        id:'listOl',
        active:false,
        method:'insertOrderedList',
        data:null
    }
}
function shortcut(key){
   return keyboard[key];
}

function shortcutId(id){
    for (var key in keyboard) {
        var array = keyboard[key] ;
            if(array.id == id){
                output = [key,array.id,array.active];
                return output ;
            }
        
    }
}