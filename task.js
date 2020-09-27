/*global document*/
function insert(x) {
	"use strict";
	document.getElementById("a").value =x;
	document.getElementById("form").value = document.getElementById("form").value + x;
}

function result() {
	"use strict";
	var y = document.getElementById("form").value;
	if (y) {
		document.getElementById("a").value = eval(y);
		document.getElementById("form").value = y + "=" + eval(y);
		
	}
}

function del() {
	"use strict";
	document.getElementById("a").value = "";
    document.getElementById("form").value = "";

}