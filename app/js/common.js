// TODO: выполнять только после проверки CSS-support'ом
const changeImgToBackground = (elementId) => {
	const wrapperTag = document.getElementById(elementId);
	const img = wrapperTag.getElementsByTagName('img')[0];
	const src = img.src;
	img.style.display = 'none';
	wrapperTag.style.backgroundImage = "url(" + src + ")";
};

changeImgToBackground('header-photo');
changeImgToBackground('footer-photo');

// mmenu initialization: 
// var $menu = $("#my-menu").mmenu({
//   extensions: ['theme-dark', 'border-none', 'listview-huge'],
//   navbar: {
// 			title: 'Menu'
// 		}
// });

// var $icon = $("#hamburger");
// var API = $menu.data( "mmenu" );

// $icon.on( "click", function() {
//    API.open();
// });

// API.bind( "open:finish", function() {
//    setTimeout(function() {
//       $icon.addClass( "is-active" );
//    }, 10);
// });

// API.bind( "close:finish", function() {
//    setTimeout(function() {
//       $icon.removeClass( "is-active" );
//    }, 10);
// });
