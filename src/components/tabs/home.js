function createHome() {
  //create element
  const homeSection = document.createElement("section");
  homeSection.classList.add("home-section");
  homeSection.style.display = "flex";
  // homeSection.setAttribute("data-section", "home-section");
  const sectionContent = document.createElement("div");
  sectionContent.classList.add("section-content");
  //create main section header
  const heroText = document.createElement("h1");
  heroText.textContent = "tasty meals for every moment";
  heroText.classList.add("section-heading");
  //create main section text
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "For over two decades, Havilah has served delicious healthy meals to over 20,000 uniqiue customers from across the globe. Our rich menu and superior cusotmer service has receives several industry awards as the best place to eat. ";
  paragraph.classList.add("section-text");
  //create link to menu section
  const link = document.createElement("a");
  link.classList.add("view-menu-btn");
  link.href = "#menu-section";
  link.textContent = "View Menu";
  //append elements
  sectionContent.append(heroText, paragraph, link);
  const fragment = new DocumentFragment();
  fragment.append(sectionContent);
  homeSection.append(fragment);
  return homeSection;
}

export default createHome;
