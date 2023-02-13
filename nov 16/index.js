// Document object model


//getElementById()
const banner = document.getElementById("banner");
// console.log(banner);
// console.dir(banner);

// getElementsNyTagName()
const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// getElementsByClassName();
const children = document.getElementsByClassName("child");
// console.log(children);

// querySelector()  MAS SPECIFIC
const bannerQuery = document.querySelector( "#banner div.child" ); // pwede gamitin ang css selector
// console.log(bannerQuery);

// querySelectorAll()
const childrenQuery = document.querySelectorAll("div.child");
// console.log(childrenQuery);
//
const heading = document.querySelector("h1")
// element.textContent
heading.textContent = "DOM";

const container = document.querySelector(".container");
// console.log( container.textContent );
// console.log( container.innerText );
// container.textContent = "This is my sample text";

// element.innerHTML
// console.log(container.innerHTML);
container.innerHTML = "<h2>The new text</h2>";

const link1 = document.querySelector("ul li a");
// element.getAttribute("")
console.log( link1.getAttribute("href"));
// element.getAttribute(attrivuteName, value);
link1.setAttribute("href", "https://google.com");
link1.setAttribute("class", "link");

const links = document.querySelectorAll("ul li a");
links[1].setAttribute("href", "https://yahoo.com");

for(let link of links) {
    link.innerText = "I AM A LINK!";
}

//Element style
const heading3 = document.querySelector("h3");

// console.dir(heading3);
heading3.style.fontSize = "48px";
heading3.style.color = "darkslategray";
heading3.style.fontFamily = "Arial";

console.log(link1.style.color);
