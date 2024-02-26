var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
];


// Part 1
//  cache the main element to a new variable
let mainEl = document.querySelector("main");
// console.log(mainEl);


// change the background color to value stored in css file
mainEl.style.backgroundColor = "var(--main-bg)";

// set the content of mainEl to DOM Manipulation. 
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr");


//  PART 2: Creating Menu Bar 

// cache the nav ID element to a new variable called topMenuEl
let topMenuEl = document.getElementById("top-menu");

// Set the height of the topmenuel element to 100%
topMenuEl.style.height = "100%";

// change the background color to value stored in css file
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

// Iterate over the entire menuLinks array and for each link object
for(i = 0; i < menuLinks.length; i++) {

var link = menuLinks[i];
// Create an anchor element
let linkEl = document.createElement('a');

// on the new element, add an href attribute with its value to the href property of the link object
linkEl.href = link.href;

// Set the new element's content to the value of the text property of the link object
linkEl.textContent = link.text;

// append the new element to topMenuEl element
topMenuEl.appendChild(linkEl);

}
