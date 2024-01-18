const nav = document.querySelectorAll(".icons2")
nav.forEach((nav) => {
	nav.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active")
		nav.classList.add("active")
	})
})

let scrollContainer = document.querySelector('.icons-filter-places');

scrollContainer.addEventListener('wheel', (evt) => {
	evt.preventDefault();
	scrollContainer.scrollLeft += evt.deltaY;
});