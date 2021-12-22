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

  navMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName !== "BUTTON" || target.classList.contains("active")) {
      return;
    }
    activeTab(target);
  });
  return navBar;
}

function activeTab(target) {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((button) => {
    if (button === target) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

export default createHeader;
