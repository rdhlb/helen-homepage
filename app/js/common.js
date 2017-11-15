// mmenu initialization: 
var $menu = $("#my-menu").mmenu({
	extensions: ['theme-dark', 'border-none', 'listview-huge'],
	navbar: {
		title: 'Menu'
	}
});

var $icon = $("#hamburger");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
	API.open();
});

API.bind( "open:finish", function() {
	setTimeout(function() {
		$icon.addClass( "is-active" );
	}, 10);
});

API.bind( "close:finish", function() {
	setTimeout(function() {
		$icon.removeClass( "is-active" );
	}, 10);
});

$(document).ready(function() {
	if(screen.width > 1024) {
		//mobile            
		$('#fullpage').fullpage({
			verticalCentered: false,
			loopBottom: true,
		});
	}
});
