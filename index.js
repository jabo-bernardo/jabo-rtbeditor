/*
	Jabo RTB Editor 
	Developed by Code Jabo
*/

/*
	Text Editor
*/
let text_editor = document.querySelector('.text-editor');

/* 
	Style Buttons
*/
let add_bold = document.getElementById('bold-button');
let add_italic = document.getElementById('italic-button');
let add_underline = document.getElementById('underline-button');
let add_justify = document.getElementById('justify-button');
let add_center = document.getElementById('center-button');

// Text Editor Events
text_editor.oninput = function(e) {

	if(e.data == "<" || e.data == ">")
		text_editor.value = text_editor.value.substring(0, text_editor.value.length - 1);

	if(e.data == null && e.inputType == "insertText") {
		text_editor.value += "<br>\n";
	}

}

// Style buttons event 
add_bold.onclick = function(e) {

	text_editor.value += "<b></b>"
	text_editor.focus();
	text_editor.setSelectionRange(text_editor.value.length - 4, text_editor.value.length - 4);

}

// Style buttons event 
add_italic.onclick = function(e) {

	text_editor.value += "<i></i>"
	text_editor.focus();
	text_editor.setSelectionRange(text_editor.value.length - 4, text_editor.value.length - 4);	

}

// Style buttons event 
add_underline.onclick = function(e) {

	text_editor.value += "<u></u>"
	text_editor.focus();
	text_editor.setSelectionRange(text_editor.value.length - 4, text_editor.value.length - 4);

}

// Style buttons event 
add_justify.onclick = function(e) {

	text_editor.value += "<p align='justify'></p>"
	text_editor.focus();
	text_editor.setSelectionRange(text_editor.value.length - 4, text_editor.value.length - 4);

}

// Style buttons event 
add_center.onclick = function(e) {

	text_editor.value += "<center></center>"
	text_editor.focus();
	text_editor.setSelectionRange(text_editor.value.length - 9, text_editor.value.length - 9);

}

/* MISC */
let show_preview = document.querySelector('.show-preview');
show_preview.onclick = function(e) {
	let prev = document.querySelector('.output');
	prev.innerHTML = text_editor.value;
}