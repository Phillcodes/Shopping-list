var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName('delete');

function inputLength() {
	return input.value.length;
}

function createListElement() {
var btn = document.createElement("button");
btn.innerHTML = "Delete";
btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);


	ul.appendChild(li);
	input.value = "";
}





function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// strikes through the text
var list = document.getElementsByTagName("li")
for(var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", liClick);
}
function liClick(){
this.classList.toggle("done");
};

// Denne function får den til at toggle on/off ved nye tilføjelser:
/*

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}
*/



// removes a line
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
