window.addEventListener("DOMContentLoaded", function (){
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  const hamburger = document.querySelector(".hamburger")
  const menyu = document.querySelector(".menyu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menyu.classList.toggle("active")
  })
})