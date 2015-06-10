$(document).ready(function(){

	/*--- Get user input ---*/

	$('input').keyup(function (){
  		var userNumber = $(this).val();
  		console.log(userNumber);
  		$( "p" ).text(userNumber);

  	return false; 

  	});

});

function showNumber(str) {
    document.getElementById('number-fact').innerText = str;
}
(function() {
	var scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = "http://numbersapi.com/42/math?callback=showNumber";
});

/*

http://numbersapi.com/42
https://numbersapi.p.mashape.com/{number}/math

*/
