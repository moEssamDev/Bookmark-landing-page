// ================
// toggle menu list
// ================
const menu_icon = document.querySelector(".menu_icon");
const close_icon = document.querySelector(".close_icon");
const logo = document.querySelector(".logo");

menu_icon.addEventListener("click", () => {
  close_icon.classList.remove("hide");
  menu_icon.classList.add("hide");
  document.querySelector(".overlay").style.display = "block";
  document.querySelector("nav ul").style.display = "block";
  logo.src = "./images/logo-bookmark-mob.svg";
});

close_icon.addEventListener("click", () => {
  menu_icon.classList.remove("hide");
  close_icon.classList.add("hide");
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("nav ul").style.display = "none";
  logo.src = "./images/logo-bookmark.svg";
});

// ================================
// conveys through the tab elements
// ================================
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1000px)");

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });

    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        document.querySelector(e.currentTarget.dataset.cont).style.display =
          "block";
      } else {
        document.querySelector(e.currentTarget.dataset.cont).style.display =
          "flex";
      }
    }
    // Call listener function at run time
    myFunction(x);
    // Attach listener function on state changes
    x.addEventListener("change", function () {
      myFunction(x);
    });
  });
});

// ======================
// accordion show content
// ======================
const accordion = document.getElementsByClassName("contentBx");

for (let i = 0; accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// ======================
// check email validation
// ======================
function validate() {
  const email = document.getElementById("email").value;
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;

  let errorState = document.querySelector(".contact form .input p");
  let form = document.querySelector(".contact form");

  // console.log(regx.test(email));
  if (!regx.test(email)) {
    form.classList.add("filled");
    if (email == "") {
      errorState.innerHTML = "Email cannot be empty!";
    } else {
      errorState.innerHTML = "Whoops, make sure it's an email";
    }
    return false;
  } else {
    form.classList.remove("filled");
    return true;
  }
}
