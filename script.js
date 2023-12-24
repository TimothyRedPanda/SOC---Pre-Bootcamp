const nav = document.querySelectorAll(".icons2")
nav.forEach((nav) => {
	nav.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active")
		nav.classList.add("active")
	})
})

const span = document.querySelectorAll(".Heart")
span.forEach((span) => {
	span.addEventListener("click", () => {
		document.querySelector(".active2")?.classList.remove("active2")
		span.classList.add("active2")
	})
})

let scrollContainer = document.querySelector('.icons-filter-places');

scrollContainer.addEventListener('wheel', (evt) => {
	evt.preventDefault();
	scrollContainer.scrollLeft += evt.deltaY;
});