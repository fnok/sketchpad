

$(document).ready(function(){
	row = '<div class="row"></div>';
	div = '<div class="square"></div>';
	$div = $('div');
	
	n = 16;

	resize(n);

	$('.toggle').on('click', (function() {$('.modal').toggleClass('hidden')}))
	$('.close').on('click', function(){
		$('.modal').toggleClass('hidden')
		n = 16;
	})	

	$('#resize-button').on('click', function(){
		$('.modal').toggleClass('hidden');
		n = parseInt( $('#rs-val[name=gridsize]').val(), 10);
		removeAll();
		resize(n);
	})
	function removeAll (){
		$('.row').remove();
		}
	function resize(num){
		if (num < 40){
			size = Math.floor(512/num-2);
			}else{
			rowWidth = 12 * num
			size = Math.floor(rowWidth/num-2);
			}

		for (var i=0;i<num;i++)
			{$('.wrapper').prepend(row);
				}
		for (var j=0;j<num;j++)	{
			$('.row').append(div);
			}
		$('.square').height(size);
		$('.square').width(size);
		$('.square').on("mouseenter", function(){ $(this).fadeTo(100, .2);})
		$('.square').on("mouseleave", function(){ $(this).fadeTo(1500, 1);})

		
		if (num<40) {
		}else{
			$('.row').css("width", rowWidth);
		}
		$('.wrapper').css("position", "absolute")
		$('.wrapper').css("top", Math.max(0, (($(window).height() - $('.wrapper').outerHeight()) / 2) + $(window).scrollTop()) + "px")
		$('.wrapper').css("left", Math.max(0, (($(window).width() - $('.wrapper').outerWidth()) / 2) + $(window).scrollLeft()) + "px")
	}
})

