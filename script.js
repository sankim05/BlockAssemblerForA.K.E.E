

function setcode(elementz){
	let arry = document.getElementsByClassName("codebox");
Array.from(arry).forEach((item) => {

    	item.style.borderWidth = "1px";
	item.style.borderColor= "black";
});

	elementz.style.borderWidth = "5px";
	elementz.style.borderColor= "green";
document.getElementById("codetag").innerText = elementz.querySelector('.number').innerText + " 번 코드를 편집 중";
	
}

document.getElementById("addit").onclick=function(){


  let clonednode = document.getElementById("codes").insertBefore(document.getElementById("copypart").cloneNode(true) ,document.getElementById("codeaddbutton"));
    clonednode.style.display = "flex";
	var numberofcode = document.getElementsByClassName("codebox").length - 3;

clonednode.querySelector('.number').innerText = numberofcode;
clonednode.onclick=function(){
	setcode(clonednode);

}

}

document.getElementById("deleteit").onclick=function(){



	let arry = document.getElementsByClassName("codebox");
	let numberofcode = arry.length - 3;
	
	if(numberofcode > 0){
		let lastelement = arry[arry.length-1];
		lastelement.remove();
		setcode(arry[arry.length-1]);
	}



}

window.onload = function(){
   	let arry = document.getElementsByClassName("codebox");
let part = arry[2];
	part.onclick=function(){
	setcode(part);

}
}

