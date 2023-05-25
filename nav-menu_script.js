// Mengecek apakah about ditekan
document.getElementsByClassName("nav__dropdown-menu")[0].addEventListener("click",()=>{
  const element = document.getElementsByClassName("nav__dropdown-menu__list")[0];

  if(element.classList.contains("active")) {
    return element.classList.remove("active");
  }

  element.classList.add("active");
})