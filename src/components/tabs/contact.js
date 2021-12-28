function createContactSection() {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");
  contactSection.style.display = "none";
  // contactSection.setAttribute("data-section", "contact-section");
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrap");
  contactWrapper.append(contactDiv, getInTouch());
  const contactHeader = document.createElement("h2");
  contactHeader.classList.add("contact-header");
  contactHeader.textContent = "Contact Us";
  contactSection.append(contactHeader, contactWrapper);
  return contactSection;
}

const contactDiv = document.createElement("div");
const fragment = new DocumentFragment();
contactDiv.classList.add("contact-details");

//office address details
const addressDetails = document.createElement("div");
const addressIcon = document.createElement("i");
addressIcon.classList.add("fas", "fa-map-marker-alt");
const addressHeading = document.createElement("h3");
addressHeading.textContent = "Office Address";
const streetDetails = document.createElement("p");
streetDetails.textContent = "suite 25, Green Estate, Lagos, Nigeria";
addressHeading.prepend(addressIcon);
//phone details
const phoneNumber = document.createElement("p");
phoneNumber.textContent = "+2349036610000";
const phoneIcon = document.createElement("i");
phoneIcon.classList.add("fas", "fa-phone-square-alt");
phoneNumber.prepend(phoneIcon);
//email details
const email = document.createElement("p");
email.textContent = "info@havilah.ng";
const emailIcon = document.createElement("i");
emailIcon.classList.add("fas", "fa-envelope");
email.prepend(emailIcon);
//website detials
const website = document.createElement("p");
website.textContent = "www.havilah.ng";
const websiteIcon = document.createElement("i");
websiteIcon.classList.add("fas", "fa-globe");
website.prepend(websiteIcon);
//
addressDetails.append(
  addressHeading,
  streetDetails,
  phoneNumber,
  email,
  website
);
fragment.append(addressDetails);
contactDiv.append(fragment);

function getInTouch() {
  const getInTouchDiv = document.createElement("div");
  const fragment = new DocumentFragment();
  getInTouchDiv.classList.add("get-intouch");
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.append(
    labelElement("Full Name"),
    inputElement("text", "name", "Enter name"),
    labelElement("email"),
    inputElement("email", "email", "Enter name"),
    labelElement("message")
  );
  //create text area
  const textArea = document.createElement("textarea");
  textArea.id = "message";
  textArea.placeholder = "Enter your message";
  textArea.maxLength = 200;
  textArea.cols = 25;
  textArea.rows = 8;
  form.append(textArea);
  //create submit button
  form.append(inputElement("submit", "submit", ""));
  fragment.append(form);
  getInTouchDiv.append(fragment);
  return getInTouchDiv;
}

function labelElement(name) {
  const nameLabel = document.createElement("label");
  nameLabel.textContent = name;
  nameLabel.htmlFor = `${name}`;
  return nameLabel;
}

function inputElement(inputType, name, placeHolder) {
  const nameInput = document.createElement("input");
  nameInput.type = `${inputType}`;
  nameInput.id = `${name}`;
  nameInput.classList.add(`${name}`);
  nameInput.placeholder = placeHolder;
  return nameInput;
}

export default createContactSection;
