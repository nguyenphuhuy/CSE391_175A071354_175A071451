$('#login').click(function() {
      		if ($('#name').val()=='admin' && $('#pass').val()=='123456') {
      			window.location.href='index.html';
      		}else{
				$( ".alert-danger" ).show();
			}
	});