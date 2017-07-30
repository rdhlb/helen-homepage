const changeImgToBackground = (elementId) => {
	const wrapperTag = document.getElementById(elementId);
	const img = wrapperTag.getElementsByTagName('img')[0];
	const src = img.src;
	img.style.display = 'none';
	wrapperTag.style.backgroundImage = "url(" + src + ")";
};

changeImgToBackground('header-photo');
changeImgToBackground('footer-photo');
changeImgToBackground('project-1');

