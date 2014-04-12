$(document).ready(function() {
    
	
	$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();

		 $('.listwa').append('<div><span class="check"><input type="checkbox" /></span> <span class="todo"><span style="display:inline-block; width:80px ;"></span>' + input_value + '</span><span style="display:inline-block; width:80px;"></span><span class="ex"><a href="#">X</a></span></div>').hide().fadeIn("slow");
       
    };
    $('input').val('');
    return false;
});



$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
});
	


$(document).on('click', 'input[type="checkbox"]', function (e) {
    
    $('.todo').toggleClass("cross");
	});
		

	
});

/*
$('input[type="checkbox"]').click(function(){
	
	$("todo").toggleClass("cross");
	
        });
		
*/		
