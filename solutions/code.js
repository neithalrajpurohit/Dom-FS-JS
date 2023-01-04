//  Question 1
let heading = document.querySelector(".crayons-card > .crayons-subtitle-2 ");
heading.innerHTML = "neithal";
document.querySelector(".crayons-card >.color-base-70").innerHTML = "lowkey";

//  Question 2

let products = document.querySelectorAll(
  ".as-imagegrid--7up > .row >.as-imagegrid-item"
);
let newArr = [];
products.forEach((elem) => {
  let val = elem.children[0].children[1].textContent;
  let res = val.replace("Support", "").trim();
  newArr.push(res);
});

// Question 3

let element = document.createElement("section");
element.classList.add("parent");
let h3 = document.createElement("h3");
let content = document.createTextNode("My New FAQ");
h3.appendChild(content);
element.appendChild(h3);

let select = document.querySelector(".article.page.no-article-survey >nav ");
select.appendChild(element);

// Question 4
document.querySelector(
  ".contactUs--inner .content-m .item--subtitle"
).innerText = 6767785467;

// Question 5
document.querySelector(
  ".diwali-deals-product-list.featureddealscombo >div .listing .mytabs .diwali-deals-product-sale-btn"
).innerText = "Check out";
