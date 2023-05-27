let currentcode = "0000000000000000";
let selectednum = 2;

function showthing(){
	let arry = document.getElementsByClassName("codebox");
	let finalres = "예상되는 결과 : ";
	currentcode = arry[selectednum].querySelector('.binary').innerText ;
	let arry2 = document.getElementsByClassName("binarybox");
	Array.from(arry2).forEach((item,index) => {
	
		

		item.innerText = currentcode.charAt(index);


	});

	if(currentcode.charAt(0) == "1"){
		document.getElementById("codeselecter1").style.display = "none";
		document.getElementById("codeselecter2").style.display = null;



	
	}else{
		document.getElementById("codeselecter1").style.display = null;
		document.getElementById("codeselecter2").style.display = "none";
		finalres = finalres + "A = " + parseInt(currentcode,2);

	}


	document.getElementById("coderesult").innerText = finalres;



}


function replaceAt (input, index, character){
	return input.substr(0, index) + character + input.substr(index+character.length);



}




function setcode(elementz){
	
	let arry = document.getElementsByClassName("codebox");
Array.from(arry).forEach((item,index) => {

    	item.style.borderWidth = "1px";
	item.style.borderColor= "black";
	if(item == elementz){

		selectednum = index;


	}
});

	elementz.style.borderWidth = "5px";
	elementz.style.borderColor= "green";
document.getElementById("codetag").innerText = elementz.querySelector('.number').innerText + " 번 코드를 편집 중";
	showthing();	

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

let arry2 = document.getElementsByClassName("binarybox");
Array.from(arry2).forEach((item,index) => {

	
item.onclick = function(){
	let chungus = currentcode.charAt(index)
	if (chungus == "0"){

		chungus = "1";
	}else{


		chungus = "0";
	}
currentcode = replaceAt(currentcode,index,chungus);
let arry = document.getElementsByClassName("codebox");
arry[selectednum].querySelector('.binary').innerText = currentcode
showthing();

}

});

}

document.getElementById("codeselecter1").querySelector("input").oninput = function(){
	let sus = Number(document.getElementById("codeselecter1").querySelector("input").value);

	if(0 <= sus && sus <= 32767){
		let bin = sus.toString(2)
		if (bin.length < 15) bin = Array(16 - bin.length).join("0") + bin;
		currentcode = "0" + String(bin);
		let arry = document.getElementsByClassName("codebox");
		arry[selectednum].querySelector('.binary').innerText = currentcode
		showthing();

	}else{
		
		document.getElementById("codeselecter1").querySelector("input").value = null
	}



}