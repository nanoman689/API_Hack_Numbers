$(document).ready(function(){

	/*--- Get user input ---*/

	$('input').keypress(function (event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
    		if(keycode == '13'){
        		var userNumber = $(this).val();

        		alert("Number is:" + userNumber);

        		if(jQuery.isNumeric(userNumber)) {
        			$.get('http://numbersapi.com/' + userNumber + '/trivia?notfound=floor&fragment', function(data) {
    					$( "p" ).text(data);	
        		} else {

        			alert("That's not a number!");

        		});

	  		return false;	

    		}
  		}
  	})
});