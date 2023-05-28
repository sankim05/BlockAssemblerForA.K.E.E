let currentcode = "0000000000000000";
let selectednum = 2;
var followmodel = null;
var overmodel = null;

function copything(ishex){
	
	let finalstr;
	let arry = document.getElementsByClassName("codebox");
	if (ishex){
		finalstr = arry[2].querySelector(".hex").innerText;
	}else{
		finalstr = arry[2].querySelector(".binary").innerText;

	}

	var i;
	for(i=3;i<arry.length;i++){
		if (ishex){

			finalstr = finalstr + ' ' + arry[i].querySelector(".hex").innerText; 

		}
		else{
			
			finalstr = finalstr + '\n' + arry[i].querySelector(".binary").innerText; 
		}
		

	}
	window.navigator.clipboard.writeText(finalstr);



}


function changebox(){
	let arry = document.getElementsByClassName("codebox");
	arry[selectednum].querySelector('.binary').innerText = currentcode
	let hexor = parseInt(currentcode, 2).toString(16).toUpperCase();
	if (hexor.length < 4) hexor = Array(5 - hexor.length).join("0") + hexor;
	arry[selectednum].querySelector('.hex').innerText = hexor;


}
function numbertosumthing(thenum){
	let finalstring = "목적지: ";
	let arry = document.getElementsByClassName("amongus");
	let checkboxnum = 0;
	Array.from(arry).forEach((item,index) => {

		if(thenum.charAt(index) == "1"){
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
	return finalstring
}


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
		let lastthing = currentcode.substring(8,13);
		let thingy2 = numbertosumthing(lastthing);
		if(thingy2 != "목적지 없음"){
			finalres += thingy2.replace("목적지: ",'');
			finalres += " = ";
		}
		document.getElementById("codeselecter2").querySelector(".thirdselecter").innerText = thingy2;
		if (document.getElementById("codeselecter2").querySelector(".thirdselecter").innerText.length > 20){
			document.getElementById("codeselecter2").querySelector(".thirdselecter").style.fontSize = "20px";
		}else if(document.getElementById("codeselecter2").querySelector(".thirdselecter").innerText.length > 13){
			document.getElementById("codeselecter2").querySelector(".thirdselecter").style.fontSize = "25px";
		}else{
			document.getElementById("codeselecter2").querySelector(".thirdselecter").style.fontSize = "30px";
		}

		
		let secondthing = currentcode.substring(2,8);
		
		
		if (document.getElementById(secondthing) != null){
			document.getElementById("codeselecter2").querySelector(".secondselecter").innerText = document.getElementById(secondthing).innerText;
			
		}else{
			document.getElementById("codeselecter2").querySelector(".secondselecter").innerText = "???"

		}
		finalres += document.getElementById("codeselecter2").querySelector(".secondselecter").innerText;
		let thirdthing = currentcode.substring(13,16);
		document.getElementById("codeselecter2").querySelector(".fourthselecter").innerText = document.getElementById(thirdthing).innerText;
		if (document.getElementById(thirdthing).innerText != "점프 안함" ){
			
			
			if(thirdthing != "111"){
				finalres = finalres + ', 계산 결과가 ' + document.getElementById(thirdthing).innerText + " 점프";
			}else{
				finalres = finalres + ", " + document.getElementById(thirdthing).innerText;

			}
		}

		

	
	}else{
		document.getElementById("codeselecter1").style.display = null;
		document.getElementById("codeselecter2").style.display = "none";
		document.getElementById("codeselecter1").querySelector("input").value = parseInt(currentcode,2);
		finalres = finalres + "A = " + parseInt(currentcode,2);

	}


	document.getElementById("coderesult").innerText = finalres;
	if (document.getElementById("coderesult").innerText.length > 65){
		document.getElementById("coderesult").style.fontSize = "15px";
	}
	else if (document.getElementById("coderesult").innerText.length > 30){
		document.getElementById("coderesult").style.fontSize = "20px";
	}else{
		document.getElementById("coderesult").style.fontSize = "30px";
	}


}


function replaceAt (input, index, character){
	return input.substr(0, index) + character + input.substr(index+character.length);



}

function sussyfunc(){
	if (followmodel!=null){
		if(followmodel.classList.contains("firstselecter")){
			if(currentcode.charAt(0) == "1"){

				if(document.getElementById("codeselecter2").querySelector(":hover") == document.getElementById("codeselecter2").querySelector(".firstselecter")){
					currentcode = replaceAt(currentcode,0,followmodel.id);
					changebox();

					showthing();
				}

			}
			else{
				if(document.getElementById("codeselecter1").querySelector(":hover") == document.getElementById("codeselecter1").querySelector(".firstselecter")){
					currentcode = replaceAt(currentcode,0,followmodel.id);
					changebox();

					showthing();

				}
	
			}


		}else{
			
			if(document.getElementById("codeselecter2").querySelector(":hover") == document.getElementById("codeselecter2").querySelector('.'+followmodel.classList[0])){
				
				if(followmodel.classList[0] == "secondselecter"){
					currentcode = currentcode.substring(0,2) + followmodel.id + currentcode.substring(8,16);
					
				}else if(followmodel.classList[0] == "thirdselecter"){
					currentcode = currentcode.substring(0,8) + followmodel.id + currentcode.substring(13,16);
				}else{
					currentcode = currentcode.substring(0,13) + followmodel.id 
				}
				changebox();

				showthing();	
			}
		}


		followmodel.remove();
		followmodel = null;
		document.body.style = "user-select: auto";
	  }


}

function blockz(itm){
	document.body.style = "user-select: none";
	let amogi = itm.cloneNode(true);
	document.getElementById("idkxd").appendChild(amogi);
	amogi.style = "position:absolute; transform:translate(-50%,-50%);pointer-events: none;"
	followmodel = amogi;

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
	let thingy = "";
	let arry = document.getElementsByClassName("amongus");
	
	Array.from(arry).forEach((item) => {

		if(item.checked == true){
			thingy = thingy + "1";

		}else{
			thingy = thingy + "0";
		}


});



	
	document.getElementById("selectbox3").querySelector(".thirdselecter").innerText = numbertosumthing(thingy);
	if (document.getElementById("selectbox3").querySelector(".thirdselecter").innerText.length > 20){
		document.getElementById("selectbox3").querySelector(".thirdselecter").style.fontSize = "20px";
	}else if(document.getElementById("selectbox3").querySelector(".thirdselecter").innerText.length > 13){
		document.getElementById("selectbox3").querySelector(".thirdselecter").style.fontSize = "25px";
	}else{
		document.getElementById("selectbox3").querySelector(".thirdselecter").style.fontSize = "30px";
	}
	document.getElementById("selectbox3").querySelector(".thirdselecter").id = thingy;
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
changebox();

showthing();

}

});



const onMouseMove = (e) =>{
if (followmodel!=null){
  followmodel.style.left = e.pageX + 'px';
  followmodel.style.top = e.pageY + 'px';

}
}
document.addEventListener('mousemove', onMouseMove);

document.addEventListener('mouseup', sussyfunc)



}

document.getElementById("codeselecter1").querySelector("input").oninput = function(){
	let sus = Number(document.getElementById("codeselecter1").querySelector("input").value);

	if(0 <= sus && sus <= 32767){
		let bin = sus.toString(2)
		if (bin.length < 15) bin = Array(16 - bin.length).join("0") + bin;
		currentcode = "0" + String(bin);
		changebox();
		showthing();

	}else{
		
		document.getElementById("codeselecter1").querySelector("input").value = null
	}



}

document.getElementById("binarycopy").onclick = function(){ copything(false)}
	

document.getElementById("hexcopy").onclick = function(){ copything(true)}