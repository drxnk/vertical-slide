const slideC = document.getElementById("slide-c");
const slideE = document.getElementById("slide-e");
const slideD = document.getElementById("slide-d");

const slidesLength = slideD.querySelectorAll("div").length;

const buttonPb = document.getElementById("b-pb");
const buttonPc = document.getElementById("b-pc");

let slideIndex = 0;

slideE.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonPc.addEventListener("click", () => trocarSlide("cima"));
buttonPb.addEventListener("click", () => trocarSlide("baixo"));

const trocarSlide = (direction) => {
  const sliderHeight = slideC.clientHeight;

  if (direction === "cima") {
    slideIndex++;
    if (slideIndex > slidesLength - 1) {
      slideIndex = 0;
    }
  } else if (direction === "baixo") {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slidesLength - 1;
    }
  }

  slideD.style.transform = `translateY(-${slideIndex * sliderHeight}px)`;

  slideE.style.transform = `translateY(${slideIndex * sliderHeight}px)`;
};


const img = document.querySelectorAll(".slide-d div");
const texto = document.querySelectorAll("h1")

slideD.addEventListener("mousemove", (z) => {
  for (let i = 0; i < img.length; i += 1) {
    let x = z.clientX - z.target.offsetLeft;
    let y = z.clientY - z.target.offsetTop;

    img.item(i).style.transformOrigin = `${x}px center`;
    img.item(i).style.transform = `scale(1.002)`;
  }
});

slideD.addEventListener("mouseleave", () => {
  for (let i = 0; i < img.length; i += 1) {
    let x = z.clientX - z.target.offsetLeft;
    let y = z.clientY - z.target.offsetTop;

    img.item(i).style.transformOrigin = `center center`;
    img.item(i).style.transform = `scale(1)`;
  }
});



slideE.addEventListener("mousemove", (z) => {
  for (let i = 0; i < texto.length; i += 1) {
    let x = z.clientX - z.target.offsetLeft;
    let y = z.clientY - z.target.offsetTop;

    texto.item(i).style.transformOrigin = `${x}px center`;
    texto.item(i).style.transform = `scale(1.003)`;
  }
});

slideE.addEventListener("mouseleave", () => {
  for (let i = 0; i < texto.length; i += 1) {
    let x = z.clientX - z.target.offsetLeft;
    let y = z.clientY - z.target.offsetTop;

    texto.item(i).style.transformOrigin = `center center`;
    texto.item(i).style.transform = `scale(1)`;
  }
});
