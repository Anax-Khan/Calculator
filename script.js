var buttons = document.getElementsByTagName('button');
var result = document.getElementById('input');

let string="";


for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click', function() {

    var buttonInnerHTML = this.innerHTML;    

    if (buttonInnerHTML == "=") {
        let answer = eval(result.value);
        result.value = answer;
    }
    
    else if(buttonInnerHTML == "AC"){
        string = string.slice(0, -1);
        result.value = string;
    }

    else if(buttonInnerHTML == "DEL"){
        string = "";
        result.value = string;
    }

    else{
        string += buttonInnerHTML;
        result.value = string;
    }

  });
}