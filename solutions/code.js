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

// Question 6
document.querySelector(".searchinput___19uW0").style.backgroundColor = "red";

// Question 7
let selectTopic = document.querySelector("#hp-search-input");
selectTopic.value = "javascript";
document.querySelector("#hp-search-form").submit;

// Question 8
let google = document.querySelector("#SIvCob");
for (let elem of google.children) {
  google.removeChild(elem);
}

// Question 9

document.querySelector(".text-color-white").style.fontFamily = "monospace";
document.querySelector(".text-color-white").style.color = "red";

// Question 10
let sel = document.querySelector(
  ".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default"
);
sel.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "red";
});

// Question 11
let logo = document.querySelector(".logo.gtag ");
let span = document.querySelector(".icon.icon-logo.in");
logo.removeChild(span);
let img = document.createElement("img");
img.setAttribute("src", "https://ineuron.ai/images/ineuron-logo.png");
img.style.height = "50px";
logo.appendChild(img);

// Question 12
let change = document.querySelector(
  ".f4.hide-sm.hide-md.mb-1.f5.d-flex.flex-justify-between.flex-items-center"
).children[0];
change.style.backgroundColor = "blue";

// Question 13
let assign = document.querySelector(".home22-intro-text");
assign.textContent = "JSBOOTCAMP";

// Question 14
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

// Question 15
let s = document.querySelector("#d560822win9b .ps-top");
s.children[3].children[0];
s.style.textAlign = "right";

// Question 16
document.querySelector(".geist-wrapper .section-title_title__VEDfK").innerHTML =
  "Start with Scratch";

// Question 17
let btn = document.querySelector(
  ".btn.btn-large.btn-block.buy.buy-button.retailer_btn-align"
);
btn.innerHTML = new Date();

// Question 18
let b = document.querySelector(".p-f03-footer-container ");
b.style.background = "pink";

// question 19
let abc = document.querySelector(".logo");
abc.getAttribute("src");

//question 20
let color = document.querySelector(".wide .desc");
color.style.color = "orange";
