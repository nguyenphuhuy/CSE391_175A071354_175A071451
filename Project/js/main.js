
	$(document).ready(function(){
	    $('#dropdownList').on('change',function(){
	        var optionValue = $(this).val();
	        //var optionText = $('#dropdownList option[value="'+optionValue+'"]').text();
	        //var optionText = $("#dropdownList option:selected").text();
	       	
	        if (optionValue==1) {
	        	$( ".result_option_1" ).show();
	        	$( ".result_option_2" ).hide();
	        	$( ".result_option_3" ).hide();
	        	$( ".result_option_4" ).hide();
	        	$( ".result_option_5" ).hide();
	        	$( ".pagina" ).show();
	        }
	        if (optionValue==2) {
	        	$( ".result_option_1" ).hide();
	        	$( ".result_option_2" ).show();
	        	$( ".result_option_3" ).hide();
	        	$( ".result_option_4" ).hide();
	        	$( ".result_option_5" ).hide();
	        	$( ".pagina" ).show();
	        }
	        if (optionValue==3) {
	        	$( ".result_option_1" ).hide();
	        	$( ".result_option_2" ).hide();
	        	$( ".result_option_3" ).show();
	        	$( ".result_option_4" ).hide();
	        	$( ".result_option_5" ).hide();
	        	$( ".pagina" ).show();
	        }
	        if (optionValue==4) {
	        	$( ".result_option_1" ).hide();
	        	$( ".result_option_2" ).hide();
	        	$( ".result_option_3" ).hide();
	        	$( ".result_option_4" ).show();
	        	$( ".result_option_5" ).hide();
	        	$( ".pagina" ).show();
	        }
	        if (optionValue==5) {
	        	$( ".result_option_1" ).hide();
	        	$( ".result_option_2" ).hide();
	        	$( ".result_option_3" ).hide();
	        	$( ".result_option_4" ).hide();
	        	$( ".result_option_5" ).show();
	        	$( ".pagina" ).show();
	        }
	        if (optionValue==0) {
	        	$( ".result_option_1" ).hide();
	        	$( ".result_option_2" ).hide();
	        	$( ".result_option_3" ).hide();
	        	$( ".result_option_4" ).hide();
	        	$( ".result_option_5" ).hide();
	        	$( ".pagina" ).hide();
	        }
	    });
	});

