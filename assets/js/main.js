// add new todo

function addNewRow(nt) {
	ntt = "<tr class='entry'><td><span class='deldisp del'>[del] </span><span class='cont'>" + nt + "</span></td></tr>";
	$('tbody').append(ntt);
}

$("#newtodo").keypress(function(event){
	if (event.which == 13) {
		var nt = $(this).val();
		addNewRow(nt);
		$(this).val("");
    }
})

$('tbody').on('click', 'span.cont', function() {
    $(this).toggleClass('done');   
});

$('tbody').on('mouseenter', 'tr.entry', function() {
	$(this).find('.deldisp').toggleClass('del');
});

$('tbody').on('mouseleave', 'tr.entry', function() {
	$(this).find('.deldisp').toggleClass('del');
});

$('tbody').on('click', 'span.deldisp', function() {
    $(this).parent().fadeOut(function(){
    	$(this).parent().remove();
    }); 
});

$('#showinput').click(function(){
	$('#newtodo').fadeToggle();
});