var head = document.head;
var link = document.createElement("link");

link.rel = "stylesheet";
link.href = "style-dark.css";

var Switch = document.getElementById("checkbox");

Switch.addEventListener('change', function(){
    if(Switch.checked==true){
        head.appendChild(link);
    }
    else{
        head.removeChild(link);
    }
});