window.addEventListener('DOMContentLoaded', () => {

const svg = document.getElementById("svg8");
console.log(svg);

const foreignObject = svg.children[7];
console.log(foreignObject);

const iframe = foreignObject.children[0].children[0];
console.log(iframe);

const iframe2 = document.querySelector("#iframe-inner-changes");
console.log(iframe2);

console.log(iframe.contentDocument.body);

})
