$(document).ready(function(){
	var row = '<div class="row"></div>';
	var div = '<div class="square"></div>';
	var $div = $('div')
	var n = 16;
	$('body').prepend('<div class="container"></div>');

	for (var i=0;i<n;i++)
	{	$('.container').append(row)
		}
	for (var j=0;j<n;j++)	{
		$('.row').append(div);
	}

	$('.square').on("mouseenter", function(){ $(this).fadeTo(100, .2);})

	$('.square').on("mouseleave", function(){ $(this).fadeTo(1500, 1);})

})
