button_m.onclick = function(){
	form_popup.classList.toggle('active');
	// form_popup.classList.remove("active2");
	popover_m.classList.add("hidden");
}
button_t.onclick = function(){
	form_popup.classList.toggle('active');
	// form_popup.classList.remove("active2");
	popover_t.classList.add("hidden");
}
button_h.onclick = function(){
	form_popup.classList.toggle('active');
	// form_popup.classList.remove("active2");
	popover_h.classList.add("hidden");
}
button_k.onclick = function(){
	form_popup.classList.toggle('active');
	// form_popup.classList.remove("active2");
	popover_k.classList.add("hidden");
}
btn_close.onclick = function(){
	form_popup.classList.remove("active");
	// form_popup.classList.toggle('active2');
	popover_m.classList.remove("hidden");
	popover_t.classList.remove("hidden");
	popover_h.classList.remove("hidden");
	popover_k.classList.remove("hidden");
}
btn_buy.onclick = function(){
	form_popup.classList.remove("active");
	popover_m.classList.remove("hidden");
	popover_t.classList.remove("hidden");
	popover_h.classList.remove("hidden");
	popover_k.classList.remove("hidden");
}