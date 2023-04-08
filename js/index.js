const btn = document.querySelector('.hero__btn');
const btnClose = document.querySelector('.close-btn');
const form = document.querySelector('.modal__wrapper');

// transform: scale(1); background-color: rgba(55,55,55,0.5); transition: 0.2s all ease;
const formOpen = function(){
	btn.addEventListener('click', e =>{
		form.style.transform = 'scale(1)'
        form.style.background = 'rgba(55,55,55,0.5)'
        form.style.transition = 'background 0.3s all ease'
	})
	btnClose.addEventListener('click', e =>{
		form.style.transform = 'scale(0)'
        
	})
}
formOpen();