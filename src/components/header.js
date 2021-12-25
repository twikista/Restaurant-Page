function createHeader() {
  const header = document.createElement("header");
  header.append(createNavbar());
  return header;
}

function createNavbar() {
  const navBar = document.createElement("nav");
  navBar.classList.add("nav-bar");
  const logo = document.createElement("h2");
  logo.textContent = "Havilah.";
  //menu buttons
  const navMenu = document.createElement("ul");
  navMenu.classList.add("nav-menu");
  const fragment = new DocumentFragment();
  const menuItems = ["home", "menu", "contact"];
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    const button = document.createElement("button");
    button.classList.add("nav-btn", `${item}-btn`);
    button.setAttribute("data-section", `${item}-section`);
    button.textContent = item;
    li.append(button);
    fragment.append(li);
  });
  navMenu.append(fragment);
  //create menu toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("toggle-btn");
  toggleBtn.textContent = "menu";
  //append components to nav bar
  navBar.append(logo, navMenu, toggleBtn);
  return navBar;
}

// function appendToMain(target) {
//   const main = document.querySelector(".main");
//   if (
//     target.classList.contains("home-btn") &&
//     target.classList.contains("active")
//   ) {
//     main.append(launchHome());
//   } else if (
//     target.classList.contains("home-btn") &&
//     target.classList.contains("active")
//   ) {
//     main.append(launchMenu());
//   }
// }

// class Observable {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(f) {
//     this.observers.push(f);
//   }
//   unsbscribe(f) {
//     this.observer = this.observers.filter((subscriber) => subscriber !== f);
//   }
//   notify(data) {
//     this.observers.forEach((observer) => observer(data));
//   }
// }

// const observe = new Observable();
// observe.subscribe(appendToMain);

// document.body.addEventListener("click", (e) => {
//   const target = e.target;

//   console.log(target);
//   if (target.tagName !== "BUTTON") {
//     return;
//   }
//   const buttons = document.querySelectorAll(".nav-btn");
//   console.log(buttons[0]);
//   buttons.forEach((button) => {
//     if (button === target) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
//   // appendToMain(target);
//   observe.notify(target);
// });
export default createHeader;
