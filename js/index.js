const siteContent = {
  "nav": {
    "nav-item-0": "New Beginning",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "New End",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let newNavItem = document.createElement("a");
let newNavItem2 = document.createElement("a");
newNavItem.setAttribute('href', '#');
newNavItem2.setAttribute('href', '#');
document.querySelector('nav').prepend(newNavItem);
document.querySelector('nav').appendChild(newNavItem2);
let navItems = document.querySelectorAll('nav a');
let count = 0;
navItems.forEach(function (item) {
  item.textContent = siteContent["nav"][`nav-item-${count}`];
  item.style.color = 'green';
  count += 1;
});

let pageHeader = document.querySelector(".cta-text h1");
pageHeader.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let mainContent = document.querySelectorAll('.main-content h4, .main-content p');
console.log(mainContent);
let count2 = 0;
let values = Object.values(siteContent["main-content"]);
mainContent.forEach(function (item) {
  if (values[count2].includes('img')) {
    count2 += 1;
  }
  item.textContent = values[count2];
  count2 += 1;
})

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contact = document.querySelectorAll(".contact h4, .contact p");
let count3 = 0;
let values2 = Object.values(siteContent["contact"]);
contact.forEach(function (item) {
  item.textContent = values2[count3];
  count3 += 1;
})

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
