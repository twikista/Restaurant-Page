import launchHome from "./tabs/home";
import launchMenu from "./tabs/menu";
import launchContact from "./tabs/contact";
function launchMain() {
  const main = document.createElement("main");
  main.append(launchHome(), launchMenu(), launchContact());
  return main;
}

export default launchMain;
