const backgroundImgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
];

const selectedBgURL =
  backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];

function printImg() {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("id", "bg-img");
  imgElement.setAttribute("src", `assets/${selectedBgURL}`);
  document.body.prepend(imgElement);
}

printImg();
