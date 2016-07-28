var myinput = document.getElementById("myinput");

function isNumber(value) {
    return !isNaN(value);
}

function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
         	makeReadOnly();
            return false;
    	 }
         return true;
      }

function makeReadOnly() {
	myinput.readOnly = true;
	setTimeout(function() {
            myinput.readOnly = false;
        }, 1000);
}

function verifyPaste(event) {
	var inputRef = document.getElementById("myinput");
	var prevContent = myinput.value;

	setTimeout(function () {
		if(isNumber(myinput.value) == false) {
			myinput.value = prevContent;
			makeReadOnly();
		}
	});
}

document.getElementById("myinput").addEventListener("paste", verifyPaste);