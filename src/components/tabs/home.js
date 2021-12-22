function homeSection() {
  //create element
  const sectionWrapper = document.createElement("section");
  const sectionContent = document.createElement("div");
  sectionContent.classList.add("section-content");
  //create main section header
  const h2 = document.createElement("h2");
  h2.textContent = "tasty meals for every moment";
  h2.classList.add("section-heading");
  //create main section text
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "For over two decades, Havilah has served delicious healthy meals to over 20,000 uniqiue customers from across the globe. Our rich menu and superior cusotmer service has receives several industry awards as the best place to eat. ";
  paragraph.classList.add("section-text");
  //create link to menu section
  const link = document.createElement("a");
  link.href = "#menu-section";
  link.textContent = "explore our menu";
  //append elements
  sectionContent.append(h2, paragraph, link);
  const fragment = new DocumentFragment();
  fragment.append(sectionContent);
  sectionWrapper.append(fragment);
  return sectionWrapper;
}

export default homeSection;
