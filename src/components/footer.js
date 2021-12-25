function createFooter() {
  const footer = document.createElement("footer");
  const fragment = new DocumentFragment();
  const copyrightInfo = document.createElement("p");
  copyrightInfo.textContent = `crafted by viro &copy; 2021`;
  const social = document.createElement("div");
  //create github link
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/twikista";
  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab", "fa-github");
  githubLink.append(githubIcon);
  //create twitter link
  const twitterLink = document.createElement("a");
  twitterLink.href = "https://twitter.com/twiksta";
  const twitterIcon = document.createElement("i");
  twitterIcon.classList.add("fab", "fa-twitter");
  twitterLink.append(twitterIcon);
  //create linkedin link
  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://linkedin.com/in/aaron-anama-70779757/";
  const linkedinIcon = document.createElement("i");
  linkedinIcon.classList.add("fab", "fa-linkedin");
  linkedinLink.append(linkedinIcon);
  //append links to social div
  social.append(copyrightInfo, githubLink, twitterLink, linkedinLink);
  //
  const poweredByInfo = document.createElement("p");
  poweredByInfo.textContent = "Powered by: The Odin Project";
  //append all footer elements to fragment
  fragment.append(social, poweredByInfo);
  footer.append(fragment);
  return footer;
}

export default createFooter;
