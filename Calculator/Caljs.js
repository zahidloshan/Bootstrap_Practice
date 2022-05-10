function insertNumber(number) {
	var existingval= $("#display").val();
	
	$("#display").val(existingval+number);
	
	
	
}

function displayClear() {
	$("#display").val("");
}

function displayResult()
{
	var result = eval($("#display").val());
	$("#display").val(result);
}