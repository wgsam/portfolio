// Shape animation variables
var index = 0;
var shape = document.getElementById("shape");
var polygon = document.getElementById("polygon");

var polygons = [
  {
    type: "triangle",
    polygon: "50% 0%, 100% 100%, 100% 100%, 50% 100%, 0% 100%, 0% 100%",
    background: "135deg, #a05cff 0%, #a05cff 25%, #a05cff 77%, #a05cff 100%",
    width: "32",
    height: "28",
    transform: "rotate(-25deg)"
  },
  {
    type: "rectangle",
    polygon: "0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%",
    background: "135deg, #FFE141 0%, #FFE141 25%, #FFE141 77%, #FFE141 100%",
    width: "28",
    height: "28",
    transform: "rotate(0deg)"
  },
  {
    type: "pentagon",
    polygon: "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%, 0% 38%",
    background: "135deg, #FF872E 0%, #FF872E 11%, #FF872E 79%, #FF872E 100%",
    width: "35",
    height: "33",
    transform: "rotate(45deg)"
  },
  {
    type: "hexagon",
    polygon: "50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%",
    background: "135deg, #569CF8 0%, #569CF8 5%, #569CF8 66%, #569CF8 100%",
    width: "32",
    height: "37",
    transform: "rotate(130deg)"
  }
];

// Shape animation function
var morph = function () {
  polygon.style.cssText =
    "height: " +
    polygons[index].height +
    "px; width: " +
    polygons[index].width +
    "px; -webkit-clip-path: polygon(" +
    polygons[index].polygon +
    "); background: linear-gradient(" +
    polygons[index].background +
    "); transform: " +
    polygons[index].transform +
    ";";
  index++;
  index = index === 4 ? 0 : index;
};

// Shape animation interval
setInterval(function () {
  morph();
}, 1500);

// Scroll animation variables
var triggerPosition = $(".poster-home").outerHeight() - 300;
var hasScrolled = false;

// Scroll animation function
function animateElements() {
  $("#line-web").attr("class", "animate");
  $("#blob-1").addClass("animate");

  setTimeout(function () {
    $("#line-mobile").attr("class", "animate");
    $("#blob-2").addClass("animate");
  }, 1000);
  setTimeout(function () {
    $("#line-dev").attr("class", "animate");
    $("#blob-3").addClass("animate");
  }, 1800);
}

// Scroll event listener
function checkScrollAndAnimate() {
  var scrollTop = $(window).scrollTop();
  console.log("Scroll event fired");
  if (!hasScrolled && scrollTop > triggerPosition) {
    hasScrolled = true;
    animateElements();
  }
}

$(window).scroll(checkScrollAndAnimate);

function openResumePage() {
  window.open('https://rebrand.ly/wgsam-cv', '_blank');
}



