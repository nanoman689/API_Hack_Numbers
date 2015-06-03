$(document).ready(function(){

	/*--- Get user input ---*/

	$('input#numberEnter').click(function (){
		$('#userNumber').val;
  		var userNumberEnter = $('#userNumber').val();
  		console.log(userNumberEnter);

  	return false; 

  	});

});

/*

http://numbersapi.com/42

*/


var result = $.getJSON("http://numbersapi.com/" + userNumberEnter);
