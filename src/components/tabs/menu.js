import afang from "./images/afang-soup.jpg";
import egusi from "./images/Egusi-poundedyam.jpg";
import jollof from "./images/jollof-rice.jpg";
import moimoi from "./images/moimoi-new.jpg";
import gizdodo from "./images/gizdodo.jpg";
import jolloff from "./images/jollof-new.jpg";
import pepperSoup from "./images/pepper-soup.jpg";
import dodo from "./images/dodo.jpg";
import asun from "./images/asun.jpg";
import suya from "./images/suya.jpg";
function createMenuSection() {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  menuSection.style.display = "none";
  // menuSection.setAttribute("data-section", "menu-section");
  menuSection.append(
    createFoodMenu("Afang Soup and Fufu", afang, "1,200NGN"),
    createFoodMenu("Egusi Soup and Fufu", egusi, "1,400NGN"),
    createFoodMenu("Jollof Rice and Chicken", jollof, "2,000NGN"),
    createFoodMenu("Moi Moi and Pap", moimoi, "1,000NGN"),
    createFoodMenu("Gizdodo", gizdodo, "3,000NGN"),
    createFoodMenu("Jollof Rice and Fish", jolloff, "3,000NGN"),
    createFoodMenu("Pepper Soup", pepperSoup, "2,500NGN"),
    createFoodMenu("Dodo", dodo, "1,500NGN"),
    createFoodMenu("Asun", asun, "5,000NGN"),
    createFoodMenu("Suya", suya, "2,500NGN")
  );
  return menuSection;
}

function createFoodMenu(description, imageUrl, price) {
  const fragment = new DocumentFragment();
  const foodMenu = document.createElement("div");
  foodMenu.classList.add("food-menu");
  const menuImg = new Image();
  menuImg.classList.add("food-image");
  menuImg.src = imageUrl;
  const MenuDetails = document.createElement("div");
  MenuDetails.classList.add("menu-detail");
  const menuTitile = document.createElement("h3");
  menuTitile.textContent = description;
  const foodPrice = document.createElement("p");
  foodPrice.textContent = price;
  MenuDetails.append(menuTitile, foodPrice);
  fragment.append(menuImg, MenuDetails);
  foodMenu.append(fragment);
  return foodMenu;
}

export default createMenuSection;
