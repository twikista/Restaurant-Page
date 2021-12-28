import launchHome from "./tabs/home";
import launchMenu from "./tabs/menu";
import launchContact from "./tabs/contact";
function createMain() {
  const mainSection = document.createElement("main");
  mainSection.classList.add("main");
  mainSection.append(launchHome(), launchMenu(), launchContact());
  return mainSection;
}

function menuToggler(target) {
  const navMenu = document.querySelector(".nav-menu");
  if (target.classList.contains("toggle-btn")) {
    navMenu.classList.toggle("active");
  } else if (target.classList.contains("nav-btn")) {
    navMenu.classList.remove("active");
  }
}

document.body.addEventListener("click", (e) => {
  const target = e.target;
  sectionToggler(target);
  menuToggler(target);
});

function sectionToggler(target) {
  const sections = document.querySelectorAll("main section");
  if (!target.classList.contains("nav-btn")) {
    return;
  }
  sections.forEach((section) => {
    if (section.classList.contains(`${target.dataset.section}`)) {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  });
}
export default createMain;
