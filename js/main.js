const navToggle = document.querySelector("#hamburger");
const links = document.querySelector(".links");
// decler varble name table from li list
let table = document.querySelectorAll("ul li");
// decler Array from li list
let arrTable = Array.from(table);
// decler varble name div for the all divs have contant
let divs = document.querySelectorAll(".box > div");
let arrdivs = Array.from(divs);

// navbar Tagoles
navToggle.addEventListener("click", function (){
    if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
        navToggle.src = 'img/icon-hamburger.svg'
    }
    else {
        links.classList.add("show-links");
        navToggle.src = 'img/icon-close.svg'
    }
})

arrTable.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        arrTable.forEach((ele) => {
        ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        arrdivs.forEach((div) => {
        div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display =
        "block";
    });
});