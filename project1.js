// let slideshow1 = document.getElementById("carey's_experience");
// let slideshow2 = document.getElementById("mary's_experience");
// let slideshow3 = document.getElementById("david's_experience");
// slideshow3.style.trans

// let leftArrow = document.getElementsByClassName("left_arrow");
let rightArrow = document.getElementsByClassName("right_arrow");

// function slideleft1() {
//   slideshow2.style.transform = "translateX(-119%)";
// }
// function slideleft2() {
//   slideshow3.style.transform = "translateX(-238%)";
// }
// function slideright1() {
//   slideshow1.style.transform = "translateX(+0%)";
//   slideshow2.style.transform = "translateX(-0%)";
// }
// function slideright2() {
//   slideshow3.style.transform = "translateX(+119%)";
//   slideshow2.style.transform = "translateX(-119%)";
// }

function slideshow() {
  slideAnimation.forEach(element => {
    element.style.transition = "transform"
    element.style.transitionDuration = "1.5s"
    element.style.transitionTimingFunction = "ease-in-out"
  });
}
function slideleft1() {
  secondDisplay.style.transform = "translateX(-119%)"
  firstDisplay.style.transform = "translateX(-119%)"
  slideshow();
}
function slideleft2() {
  thirdDisplay.style.transform = "translateX(-238%)"
  secondDisplay.style.transform = "translateX(-238%)"
  slideshow();
}
function slideright1() {
  firstDisplay.style.transform = "translateX(-0%)"
  secondDisplay.style.transform = "translateX(-0%)"
  slideshow();
}
function slideright2() {
  thirdDisplay.style.transform = "translateX(-119%)"
  secondDisplay.style.transform = "translateX(-119%)"
  slideshow();
}

let firstDisplay = document.getElementById("carey's_experience");
let secondDisplay = document.getElementById("mary's_experience");
let thirdDisplay = document.getElementById("davids_experience");
let slideAnimation = [firstDisplay, secondDisplay, thirdDisplay]





for (let index = 0; index < rightArrow.length; index++) {
  rightArrow[index].addEventListener("mouseover", function () {
    rightArrow[index].style.backgroundColor = "rgb(134, 134, 134)";
  });
  rightArrow[index].addEventListener("mouseleave", function () {
    rightArrow[index].style.backgroundColor = "rgb(109, 223, 143)";
  });
}

class mouseEvents {
  constructor(leftArrow) {
    this.lArrow = leftArrow;
    Array.from(this.lArrow).forEach((element) => {
      element.addEventListener("mouseover", function () {
        element.style.backgroundColor = "rgb(134, 134, 134)";
      });
      element.addEventListener("mouseleave", function () {
        element.style.backgroundColor = "rgb(109, 223, 143)";
      });
    });
  }
}
new mouseEvents(document.getElementsByClassName("left_arrow"));

// Array.from(leftArrow).forEach((element) => {
//   element.addEventListener("mouseover", function () {
//     element.style.backgroundColor = "rgb(134, 134, 134)";
//   });
//   element.addEventListener("mouseleave", function () {
//     element.style.backgroundColor = "rgb(109, 223, 143)";
//   });
// });

// let aboutUniversity = document.querySelectorAll(".aboutuniversity");
// let nBurger = document.querySelector(".navbar-burger");
// let nCross = document.querySelector(".nav-cross");
// let hiddenNav = document.querySelector(".hidden-nav");
// let uniDetails = document.querySelector(".uni-details")





class OpenResponsiveNav {
  constructor(aboutUniversity, nBurger, nCross, hiddenNav, uniDetails, hiddenInfo) {
    this.aboutUniversity = aboutUniversity;
    this.nBurger = nBurger;
    this.nCross = nCross;
    this.hiddenNav = hiddenNav;
    this.uniDetails = uniDetails;
    this.hiddenInfo = hiddenInfo
    Array.from(aboutUniversity).forEach(element => {
      nBurger.addEventListener("click", function () {
        if (nBurger.style.display == "" || nBurger.style.display == "block") {
          nCross.style.display = "block";
          nBurger.style.display = "none";
          hiddenNav.style.display = "absolute"
          hiddenNav.style.transform = "scale(1,1)"
          Array.from(hiddenInfo).forEach(e => {
            e.style.opacity = "1"
          })
          // hiddenNav.style.transition = "transform"
          // hiddenNav.style.transformOrigin = "top"
          // hiddenNav.style.transitionDuration = "700ms"
          // hiddenNav.style.transitionTimingFunction = "ease-in-out"
        }
      });
      nCross.addEventListener("click", function () {
        if (nCross.style.display == "block") {
          nCross.style.display = "none"
          nBurger.style.display = "block";
          hiddenNav.style.transform = "scale(1,0)";
          Array.from(hiddenInfo).forEach(e => {
            e.style.opacity = "0"
            e.style.transitionDelay = "0.2s"
          })
        }
      });
    });

  }
}

new OpenResponsiveNav(
  document.querySelectorAll(".aboutuniversity"),
  document.querySelector(".navbar-burger"),
  document.querySelector(".nav-cross"),
  document.querySelector(".hidden-nav"),
  document.querySelector(".uni-details"),
  document.querySelectorAll(".hidden-extrainfo")
)






// Array.from(aboutUniversity).forEach(element => {
//   nBurger.addEventListener("click", function () {
//     if (nBurger.style.display == "" || nBurger.style.display == "block") {
//       nCross.style.display = "block";
//       nBurger.style.display = "none";
//       uniDetails.style.display = "none";
//       hiddenNav.style.display = "flex";
//     }
//   });
//   nCross.addEventListener("click", function () {
//     if (nCross.style.display == "block") {
//       nCross.style.display = "none"
//       nBurger.style.display = "block";
//       hiddenNav.style.display = "none";
//       uniDetails.style.display = "none";
//     }
//   });
// });

