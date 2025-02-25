const nav = document.querySelector("nav");
const pfpImg = document.getElementById("profile-img");
const text = document.querySelector(".second-name");

//Sticks the nav bar to the screen when scrolling:
function stickNav() {
    if(window.scrollY > 0) {
    nav.style.position = "sticky";
    nav.style.top = '0';
    nav.style.width = '100%'
    nav.style.backgroundColor = "white"
    nav.style.zIndex = '1000'
    } else {
        nav.style.position = 'static'
    }
}

//Makes the h2 visible after scrolling past a certian point:
function textAppear() {
    if(window.scrollY > 500){
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
    }
}

//Makes the small pfp appear after scrolling past a certain point:
function imgAppear() {
    if (window.scrollY > 500) {
      pfpImg.style.visibility = "visible";
    } else {
      pfpImg.style.visibility = "hidden";
    }
}
// Add changing background from image to different image or color:

window.addEventListener("scroll", stickNav);
window.addEventListener("scroll", imgAppear);
window.addEventListener("scroll", textAppear);