import header from "./header";
import main from "./main";
function initializePage() {
  const content = document.createElement("div");
  content.append(header(), main());
  return content;
}
export default initializePage;
