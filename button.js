var buttonRef = document.getElementById("myButton");

buttonRef.onclick = function () {
	if (buttonRef.value == "Like") {
		buttonRef.value = "Unlike";
		buttonRef.style.backgroundColor = "#D2691E";
	}
	else {
		buttonRef.value = "Like"
		buttonRef.style.backgroundColor = "#48D1CC";
	}
}