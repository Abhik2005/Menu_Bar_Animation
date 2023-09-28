var circle = document.querySelector(".circle");
var count = 0;
circle.addEventListener("click", function () {
  if (count == 0) {
    console.log("hll");
    circle.style.rotate = "180deg";
    document.querySelector(".circle>i").style.bottom = "45%";
     document.querySelector(".circle>i").style.left = "50%";
     document.querySelector(".circle>i").style.transform = "translate(-50%,-45%)";
    count = 1;
  } else {
    console.log("hii");
    circle.style.rotate = "0deg";
    document.querySelector(".circle>i").style.bottom = "20%";
    document.querySelector(".circle>i").style.left = "50%";
    document.querySelector(".circle>i").style.transform =
      "translate(-50%,-20%)";
    count = 0;
  }
});