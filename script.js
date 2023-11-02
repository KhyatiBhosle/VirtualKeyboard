var head = document.head;
var link = document.createElement("link");
var letters = document.querySelectorAll(".single");
var textBox = document.querySelector(".textbox");
var space = document.getElementById("space");
var backspace = document.getElementById("backspace");

function upper(){
    letters.forEach(letter => {
        if (textBox.textContent == ""){
            letter.innerHTML = letter.innerHTML.toUpperCase();
        }
        else if(textBox.textContent[textBox.textContent.length - 1] == " " && textBox.textContent[textBox.textContent.length - 2] == "."){
            letter.innerHTML = letter.innerHTML.toUpperCase();
        }
        else{
            letter.innerHTML = letter.innerHTML.toLowerCase();
        }
    });
}

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

textBox.textContent = null;

upper();

letters.forEach(letter => {
    letter.addEventListener('click', function(){
        textBox.textContent = textBox.textContent + letter.innerHTML;
        upper();
    })
});


space.addEventListener('click', function(){
    textBox.textContent = textBox.textContent + " ";
    upper();
});


backspace.addEventListener('click', function(){
    textBox.textContent = textBox.textContent.slice(0, -1);
    upper();
})
