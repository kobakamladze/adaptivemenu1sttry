let btn = document.querySelector(`.button`);
let main = document.querySelector(`.main`);
let aside = document.querySelector(`.aside`);

btn.onclick = function() {
	btn.classList.toggle(`_active`);
	main.classList.toggle(`_active`);
	aside.classList.toggle(`_active`);
}