import rice from "./images/Avatarmker2.png";
function createMenuSection() {
  const menuSection = document.createElement("section");
  menuSection.append(
    createFoodMenu("Rice and Stew", rice, "1,200NGN"),
    createFoodMenu("Egusi Soup and Eba", rice, "1,400NGN"),
    createFoodMenu("Jollof Rice and Chicken", rice, "2,000NGN"),
    createFoodMenu("Bean ckae and Pap", rice, "1,000NGN")
  );
}

function createFoodMenu(description, imageUrl, price) {
  const fragment = new DocumentFragment();
  const foodMenu = document.createElement("div");
  foodMenu.classList.add("food-menu");
  const foodImg = new Image();
  menuImg.classList.add("food-image");
  menuImg.src = imageUrl;
  const MenuDetails = document.createElement("div");
  foodMenu.classList.add("menu-detail");
  const menuTitile = document.createElement("h3");
  menuTitile.textContent = description;
  const foodPrice = document.createElement("p");
  foodPrice.textContent = price;
  MenuDetails.append(menuTitile, foodPrice);
  fragment.append(menuImg, MenuDetails);
  foodMenu.append(foodMenu);
  return foodMenu;
}

function launchMenu() {
  const main = document.querySelector("main");
  main.append(createMenuSection());
}

export default launchMenu;
