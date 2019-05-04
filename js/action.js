function mouseOver() {
    document.getElementById("hover").style.color = "blue";
}

function mouseOut() {
    document.getElementById("hover").style.color = "red";
}

function myMove(){
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if(pos == 150){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
