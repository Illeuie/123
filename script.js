


let changeImg = document.querySelector('.changeImg');

document.querySelector('.containerOllImg').onclick = (event) => {
	event.stopPropagation();
		
	let check = event.target;
	let checkName = check.className;
		
	if (check.nodeName !== 'IMG') return;

	if (checkName === 'ImgOne') {
		
    changeImg.src = 'img/5351-prn-A1.jpg';
	}
	else if (checkName === 'ImgTwo') {
		changeImg.src = 'img/anime barbara.jpg';
	}
	else if (checkName === 'ImgThree') {
		changeImg.src = 'img/anime_girls.jpg';
	}
	else if (checkName === 'ImgFive') {
		changeImg.src = 'img/New.jpg';
	}
	else if (checkName === 'ImgSixth') {
		changeImg.src = 'img/amw_prime.jpg';
	}
	else if (checkName === 'ImgSeventh') {
		changeImg.src = 'img/uEk5BYqlH1w.jpg';
	}
	else if (checkName === 'ImgFive') {
		changeImg.src = 'img/b93.jpg';
	}
	else{
		changeImg.src = 'img/images.jfif';
	}
}
	
		let left = 0;
		//let pre = 1250;

			autoSlider();
		let nextImg = document.querySelector('.ContainerBaner');


	document.querySelector('.buttonPre').onclick = () => {
			left = left +250;
			if (left >= 250) {
			left = 0;
		}
			nextImg.style.left = left +'px';
	}

		document.querySelector('.buttonNext').onclick = () => {
			left = left -250; 
				if (left <  -1250) {
				left = 0;
		}
		nextImg.style.left = left +'px';
	}

	function autoSlider(){
		setTimeout(function(){
		left = left -250; 
				if (left < -1250) {
				left = 0;
		}
		nextImg.style.left = left +'px';
		autoSlider();
			
		}, 2000)
	}