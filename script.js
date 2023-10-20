const container = document.querySelector(".container")
const backbtn = document.querySelector(".left-arrow")
const nextbtn = document.querySelector(".right-arrow")
const arrow = document.querySelectorAll(".arrow")
const firstImg = container.querySelectorAll("a>img")[0];

let firstImgWidth = firstImg.clientWidth;


// container.addEventListener("wheel",(event) => {
//     event.preventDefault();
//     container.scrollLeft += event.deltaY;
// })

nextbtn.addEventListener("click",(event) => {
    container.scrollLeft += firstImgWidth+5;
})

backbtn.addEventListener("click",(event) => {
    container.scrollLeft -= firstImgWidth+5;
})





