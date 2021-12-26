import launchHome from "./tabs/home";
import launchMenu from "./tabs/menu";
import launchContact from "./tabs/contact";
/*function launchMain(target) {
  console.log(target);
  const main = document.createElement("main");
  main.append(launchHome(), launchMenu(), launchContact());
  return main;
}*/
function createMain(target) {
  const mainSection = document.createElement("main");
  console.log(mainSection.firstChild);
  mainSection.classList.add("main");
  mainSection.append(launchHome());
  // appendToMain(target);
  /*
  if (
    button.classList.contain("home-btn") &&
    button.classList.contain("active")
  ) {
    main.append(launchHome());
  } else if (
    button.classList.contain("home-btn") &&
    button.classList.contain("active")
  ) {
    main.append(launchMenu());
  }
*/
  console.log(document.querySelector(".home-btn"));
  return mainSection;
}

function appendToMain(target) {
  const main = document.querySelector(".main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  if (target.classList.contains("home-btn")) {
    main.append(launchHome());
  } else if (
    target.classList.contains("menu-btn") ||
    target.classList.contains("view-menu-btn")
  ) {
    main.append(launchMenu());
  } else if (target.classList.contains("contact-btn")) {
    main.append(launchContact());
  }
}

function menuToggler() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
}

/*class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }
  unsbscribe(f) {
    this.observer = this.observers.filter((subscriber) => subscriber !== f);
  }
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const observe = new Observable();
observe.subscribe(appendToMain);
*/

document.body.addEventListener("click", (e) => {
  const target = e.target;
  // console.log(target);
  // if (target.tagName != "BUTTON") {
  //   return;
  // }
  if (
    target.classList.contains("nav-btn") ||
    target.classList.contains("view-menu-btn")
  ) {
    appendToMain(target);
    menuToggler();
  }
  // const buttons = document.querySelectorAll(".nav-btn");
  // buttons.forEach((button) => {
  //   if (!button === target) {
  //     button.classList.remove("active");
  //   }
  //   button.classList.add("active");
  // });
  else if (target.classList.contains("toggle-btn")) {
    menuToggler();
  } else {
    return;
  }
  // observe.notify(target);
});
/*
function oya(target) {
  const ele = document.querySelectorAll("main section");
  ele.forEach((ele) => {
    if (ele.classList.contains(`${target.dataset.section}`)) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
}
*/
export default createMain;
