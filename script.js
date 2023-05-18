



document.getElementById("codeaddbutton").onclick=function(){


   var clonednode = document.getElementById("codes").insertBefore(document.getElementById("copypart").cloneNode(true) ,document.getElementById("codeaddbutton"))
    clonednode.style.display = "flex"

}