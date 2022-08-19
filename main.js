window.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;
  const containerHeight = imageContainer.clientHeight;
  const containerWidth = imageContainer.clientWidth;
  if (containerHeight > windowHeight) {
    console.log(containerWidth);
    imageContainer.style.width = (containerWidth - (containerWidth / 3.53)) + 'px'
    console.log(containerWidth);
  }
});

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
// const container = document.querySelector('.container');

const iframe = document.querySelector("#iframe-inner-changes");
const imageContainer = document.querySelector(".image-container");

console.log(iframe);

iframe.onload = function () {
  console.log(iframe.contentDocument.body);
  let content = iframe.contentDocument.body;
  content.style.fontSize = "5px";
};

let imageContainerHeight;
let imageContainerWidth;

const observer = new ResizeObserver((entries) => {
  imageContainerHeight = entries[0].contentRect.height;
  imageContainerWidth = entries[0].contentRect.width;
});

observer.observe(imageContainer);
// observer.observe(windowHeight)

function adjustContainer(height) {
  container.style.height = `${height}px`

}

// const checkScreenHeight = () => {
//   console.log(`Window Height: ${windowHeight}`);
//   console.log(`Image container height ${imageContainerHeight}`);
//   if (imageContainerHeight >= windowHeight) {
//     console.log(`${imageContainerWidth}px`);
//     imageContainer.style.width = `${(imageContainerWidth - 2)}px`;
//     console.log(
//       `This is the window height: ${windowHeight} and this is the image container height ${imageContainerHeight}`
//     );
//   }
// };

// if (imageContainerHeight >= windowHeight) {
//   console.log(`${imageContainerWidth}px`);
//   imageContainer.style.width = `${imageContainerWidth}px`
//   console.log(`This is the window height: ${windowHeight} and this is the image container height ${imageContainerHeight}`);
// }
