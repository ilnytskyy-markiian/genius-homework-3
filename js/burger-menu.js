const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuBtnOpen = document.querySelector(".burger-btn-open");
const burgerMenuBtnClose = document.querySelector(".burger-btn-close");

const toggleBurgerOpen = () => {
  burgerMenu.classList.toggle("is-hidden");
  burgerMenu.classList.toggle("burger-is-hidden");
};

const toggleBurgerClose = () => {
  burgerMenu.classList.toggle("burger-is-hidden");
  setTimeout(() => burgerMenu.classList.toggle("is-hidden"), 200);
};

burgerMenuBtnOpen.addEventListener("click", toggleBurgerOpen);
burgerMenuBtnClose.addEventListener("click", toggleBurgerClose);

// To toggle a class in JavaScript after a delay, you should use the
// setTimeout() function, which executes a function once after a specified time in milliseconds.
// Here is how to implement it:
// Using setTimeout() (Vanilla JavaScript)
// This is the standard, native JavaScript method and is generally preferred over jQuery for this purpose.
// javascript

// // Get the element you want to target
// const element = document.getElementById('myElement');

// // Get the button or element that triggers the action
// const toggleButton = document.getElementById('toggleButton');

// toggleButton.addEventListener('click', function() {
//   // Set a timeout to delay the class toggle
//   // The function inside setTimeout will run after 1000 milliseconds (1 second)
//   setTimeout(function() {
//     element.classList.toggle('toggled-class');
//   }, 1000); // Specify the delay in milliseconds (e.g., 1000ms = 1 second)
// });

// Explanation:

//     setTimeout() takes two arguments: a function to execute, and the delay time in milliseconds.
//     element.classList.toggle('toggled-class') is the specific action that adds or removes the class 'toggled-class'. This action is wrapped inside the function that setTimeout() calls.

// Alternative Method: Using CSS transition-delay
// If the goal is to create a visual effect like a smooth transition, you might be able to achieve it purely with CSS, which can be more performant for animations.
// css

// /* CSS */
// .my-element {
//   /* ... other styles ... */
//   transition-property: background-color, transform;
//   transition-duration: 0.5s;
//   /* The delay is applied when the 'toggled-class' is added */
//   transition-delay: 1s;
// }

// .toggled-class {
//   /* New styles when class is present */
//   background-color: blue;
//   transform: rotate(180deg);
// }

// In this scenario, the JavaScript would just add the class instantly, and the CSS would handle the delay and animation:
// javascript

// // JavaScript (for CSS transition method)
// const element = document.getElementById('myElement');
// element.addEventListener('click', function() {
//   element.classList.toggle('toggled-class'); // Class is added/removed instantly
// });

// For general delayed execution, setTimeout() is the standard and most flexible approach. More documentation on this method can be found on the MDN Web Docs.
