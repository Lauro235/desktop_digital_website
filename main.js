// const svg = document.getElementById("svg8");
//   console.log(svg);

//   const foreignObject = svg.children[7];
//   console.log(foreignObject);

//   const iframe = foreignObject.children[0].children[0];
//   console.log(iframe);

  const iframe = document.querySelector("#iframe-inner-changes");
  console.log(iframe);

iframe.onload = function() {
  console.log(iframe.contentDocument.body);
  let content = iframe.contentDocument.body;
  content.style.fontSize = '5px'
}

