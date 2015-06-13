$(document).ready(function(){
    /*--- Append a button at the end of the guess --*/

    var $input = $('<input type="button" value="new number"/>');
    
	/*--- Get user input ---*/

	$('input').keypress(function (event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
    		if(keycode == '13'){
        		var userNumber = $(this).val();

                /*--- Check to see if it's a number and if so, use the numbersAPI---*/

        		if(jQuery.isNumeric(userNumber)) {
        			$.get('http://numbersapi.com/' + userNumber + '/trivia?notfound=floor&fragment', function(data) {
    					$( "p" ).text(data);
                        $input.appendTo($("body"));
                });	
        		
                /*--- Alert if it's not a number ---*/    

                } else {
        			alert("That's not a number!");
                    $input.appendTo($("body"));
        		}

	  		return false;
    	}
  	});
    /*

    $('button').click(function()){
        alert("RESET!"); 
    
    */
});