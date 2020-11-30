let icon = document.getElementById('icon');
let main_menu = document.getElementById('main_menu');
let categories = document.getElementById('categories');
let menu_products = document.getElementById('menu_products');


icon.onclick = function(){
	main_menu.classList.toggle('active');
}
categories.onclick = function(){
	menu_products.classList.toggle("active2");
}