const screenBorder1 = document.getElementById("path1781");
const screenBorder2 = document.getElementById("path2006");
const screenBorder3 = document.getElementById("path2031");

window.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;
  const containerHeight = imageContainer.clientHeight;
  const containerWidth = imageContainer.clientWidth;
  if (containerHeight > windowHeight) {
    console.log(containerWidth);
    imageContainer.style.width = containerWidth - containerWidth / 3.53 + "px";
    console.log(containerWidth);
  }
});

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
// const container = document.querySelector('.container');

const iframe = document.querySelector("#iframe-inner-changes");
const imageContainer = document.querySelector(".image-container");

console.log(iframe);

let imageContainerHeight;
let imageContainerWidth;

const observer = new ResizeObserver((entries) => {
  imageContainerHeight = entries[0].contentRect.height;
  imageContainerWidth = entries[0].contentRect.width;
  console.log(imageContainerWidth);

  // Create dynamic iframe fontsize
  let content = iframe.contentDocument.body;
  if (imageContainerWidth > 999) {
    content.style.fontSize = "5px";
  }
  if (imageContainerWidth < 1000) {
    content.style.fontSize = "10px";
  }
});

observer.observe(imageContainer);
// observer.observe(windowHeight)

function adjustContainer(height) {
  container.style.height = `${height}px`;
}

iframe.onload = function () {
  let content = iframe.contentDocument.body;
  console.log(imageContainerWidth);
  if (imageContainerWidth > 999) {
    content.style.fontSize = "5px";
  }
  if (imageContainerWidth < 1000) {
    content.style.fontSize = "10px";
  }
  console.log(iframe.contentDocument.body);
};


// Create hover effect on screen

iframe.addEventListener("mouseenter", (e) => {
  screenBorder1.style.stroke = "green";
});

iframe.addEventListener("mouseleave", (e) => {
  screenBorder1.style.stroke = "black";
});
