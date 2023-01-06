const menu = document.querySelector(".hamburger-heading");
const menuItem = document.querySelectorAll(".heading-item");
const headingIcon = document.querySelector(".heading-icon");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const crossIcon = document.querySelector('.cross-icon');

function toggleIcon(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        crossIcon.style.display = "none";
        hamburgerIcon.style.display="block";
    }else{
        menu.classList.add("showMenu");
        hamburgerIcon.style.display="none";
        crossIcon.style.display="block";
    }
}


headingIcon.addEventListener("click", toggleIcon);