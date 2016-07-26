var buttonRef = document.getElementById("myButton");

buttonRef.onclick = function () {
	var tableRef = document.getElementById("myTable");


	for(i=0; i<tableRef.rows.length;i++){
		if(i%2!=0) {
			tableRef.rows[i].style.display = "none";
		}
	}
}