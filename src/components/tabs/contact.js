function createContactSection() {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrap");
  contactWrapper.append(contactDetails(), getInTouch());
  contactSection.append(contactWrapper);
  return contactSection;
}

function contactDetails() {
  const contactDiv = document.createElement("div");
  const fragment = new DocumentFragment();
  contactDiv.classList.add("contact-details");
  const h3 = document.createElement("h3");
  h3.textContent = "Contact Details";
  fragment.append(
    h3,
    addressDetails(
      "Office Address",
      `suite 25, Green Estate,
      Lagos, Nigeria `,
      "fa-map-marker-alt"
    ),
    addressDetails("Phone Number", "+2349036610000", "fa-phone-square-alt"),
    addressDetails("Email", "info@havilah.ng", "fa-envelope"),
    addressDetails("Website", "www.havilah.ng", "fa-globe")
  );
  contactDiv.append(fragment);
  return contactDiv;
}

function addressDetails(headingText, details, iconClass) {
  const address = document.createElement("div");
  const i = document.createElement("i");
  i.classList.add("fas", `${iconClass}`);
  const heading = document.createElement("h4");
  heading.textContent = headingText;
  const pText = document.createElement("p");
  pText.textContent = details;
  heading.append(i);
  address.append(heading, pText);
  return address;
}

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
  const textArea = document.createElement("textarea");
  textArea.id = "message";
  textArea.placeholder = "Enter your message";
  textArea.maxLength = 200;
  textArea.cols = 25;
  textArea.rows = 10;
  form.append(textArea);
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
