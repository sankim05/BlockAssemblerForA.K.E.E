

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

function checkboxrr(){
	let finalstring = "목적지: ";
	let arry = document.getElementsByClassName("amongus");
	let checkboxnum = 0;
	Array.from(arry).forEach((item) => {

		if(item.checked == true){
			checkboxnum++;
			if (!(checkboxnum == 1)){
				finalstring = finalstring + ", ";
			}
			
			finalstring = finalstring + item.parentElement.getElementsByTagName("span")[0].innerText

		}


});
	if(checkboxnum==0){
		finalstring = "목적지 없음";
	}
	
	document.getElementById("00000").innerText = finalstring;
	if (document.getElementById("00000").innerText.length > 20){
		document.getElementById("00000").style.fontSize = "20px";
	}else if(document.getElementById("00000").innerText.length > 13){
		document.getElementById("00000").style.fontSize = "25px";
	}else{
		document.getElementById("00000").style.fontSize = "30px";
	}
}


window.onload = function(){
   	let arry = document.getElementsByClassName("codebox");
let part = arry[2];
	part.onclick=function(){
	setcode(part);

}


}

