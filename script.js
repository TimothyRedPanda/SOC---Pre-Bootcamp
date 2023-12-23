const nav = gsap.utils.toArray(".icons2")
nav.forEach((nav) => {
	nav.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active")
		nav.classList.add("active")
	})
})

const span = gsap.utils.toArray(".Heart")
span.forEach((span) => {
	span.addEventListener("click", () => {
		document.querySelector(".active2")?.classList.remove("active2")
		span.classList.add("active2")
	})
})
