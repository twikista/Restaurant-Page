import header from "./header";
import main from "./main";
import footer from "./footer";

function initializePage() {
  const content = document.querySelector("#content");
  content.append(header(), main(), footer());
  return content;
}

export default initializePage;
