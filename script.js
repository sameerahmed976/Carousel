const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelector(".image");
const caption = document.querySelector(".caption");
const number = document.querySelector(".number");

const img = [
  "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

const text = ["first text", "second text", "third text"];
const numbername = ["1 / 1", "1 / 2", " 1 / 3"];

let item = 0;

window.addEventListener("DOMContentLoaded", function () {
  showImage(item);
});

function showImage(n) {
  image.src = img[n];
  caption.textContent = text[n];
  number.textContent = numbername[n];
}

next.addEventListener("click", function () {
  item++;
  if (item > img.length - 1) {
    item = 0;
  }
  showImage(item);
});
prev.addEventListener("click", function () {
  item--;
  if (item < 0) {
    item = img.length - 1;
  }
  showImage(item);
});
