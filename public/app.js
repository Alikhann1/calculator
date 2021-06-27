function numcall(number){
    var a = document.getElementById("num");
    a.value += number;
}

function calculate(){
    var a = document.getElementById("num");
    a.value = eval(a.value);
}
function clean(){
    var a = document.getElementById("num");
    a.value = ""
}
function lstvalue(){
    var a = document.getElementById("num");
    a.value = a.value.slice(0,-1)
}

