import "./style.css";
import avatar from "./AvatarMaker2.png";
console.log("Hey!, i can see you");
const h1 = document.createElement("h1");
h1.textContent = "I am an H1 element";
const myImage = new Image();
myImage.src = avatar;
document.body.appendChild(h1);
document.body.appendChild(myImage);
